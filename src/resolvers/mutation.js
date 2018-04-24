import User from '../database-models/user';
import Bot from '../database-models/bot';

const createUser = async (parent, args, context, info) => {
  const inputUser = {
    ...args
  };
  const user = new User(inputUser).save({ validateBeforeSave: true });

  return user;
};

const createBot = async (parent, args, context, info) => {
  const inputBot = {
    ...args
  };

  const bot = new Bot(inputBot).save({ validateBeforeSave: true });

  return bot;
};

export default {
  createUser,
  createBot
};
