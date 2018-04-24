import User from '../database-models/user';
import Bot from '../database-models/bot';

const login = async (root, args, context, info) => {
  const where = {
    username: args.username
  };

  const user = await User.findOne(where).lean();
  const bots = await Bot.find({ ownerId: user._id }).lean();

  user.bots = bots;

  return user;
};

export default {
  login
};
