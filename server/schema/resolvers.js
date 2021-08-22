const { AuthenticationError } = require("apollo-server-express");
const { User, Bike } = require('../models');
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if(context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('bikes')
            .populate('friends')
          return userData;
        }
        throw new AuthenticationError('Not logged in');
      },
      users: async () => {
        return User.find()
          .select('-__v -password')
          .populate('bikes')
          .populate('friends')
      },
      bikes: async () => {
        return Bike.find()
      },
      user: async (parent, { _id }) => {
        return User.findOne({ _id })
          .select('-__v -password')
          .populate('bikes')
          .populate('friends')
      },
      bike: async(parent, {_id}) => {
        return Bike.findOne({_id})
      }
    },
    Mutation: {
      addUser: async(parent, args) => {
        const user = await User.create(args);
        const token = signToken(user)

        return { token, user };
      },
      updateUser: async(parent, args, context) => {
        if(context.user) {
          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            args,
            { new: true, runValidators: true }
          );
          return user
        }
        throw new AuthenticationError('You must be logged in to edit a profile')
      },
      addBike: async(parent, args, context) => {
        if(context.user) {
          const bike = await Bike.create({...args, user_id: context.user._id})

          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { bikes: bike._id } },
            { new: true, runValidators: true }
          );
          return bike
        }
        throw new AuthenticationError('You must be logged in')
      },
      updateBike: async (parent, args) => {
        if(args._id) {
          const updatedBike = await Bike.findOneAndUpdate(
            { _id: args._id },
            args,
            { new: true }
          );
          return updatedBike;
        }
        throw new AuthenticationError('You need to be logged in to update a bike')
      },
      login: async (parent, {email, password}) => {
        const user = await User.findOne({email})

        if(!user) {
          throw new AuthenticationError('Incorrect Credentials');
        }
        const correctPW = await user.isCorrectPassword(password)

        if(!correctPW) {
          throw new AuthenticationError('Incorrect Credentials');
        }
        const token = signToken(user);
        return { token, user };
      }
    }
};

module.exports = resolvers;