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
      }
    },
    Mutation: {
      addUser: async(parent, args) => {
        const user = await User.create(args);
        const token = signToken(user)

        return { token, user };
      }
    }
};

module.exports = resolvers;