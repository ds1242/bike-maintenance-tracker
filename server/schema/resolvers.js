const { AuthenticationError } = require("apollo-server-express");
const User = require("../models/User");

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
      }
    },
};

module.exports = resolvers;