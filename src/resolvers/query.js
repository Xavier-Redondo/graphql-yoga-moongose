import User from '../database-models/user';
import Bot from '../database-models/bot';

const login = async (root, args, context, info) => {
  const where = {
    username: args.username
  };

  const user = await User.findOne(where).lean();

  return user;
};

const searchBot = async (root, args, context, info) => {
  const where = {
    _id: args._id
  };

  const bot = await Bot.findOne(where).lean();

  return bot;
};

export default {
  login,
  searchBot
};
