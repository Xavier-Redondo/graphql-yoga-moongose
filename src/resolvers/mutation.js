import User from '../database-models/user';
import Bot from '../database-models/bot';
import Card from '../database-models/card';

const createUser = async (parent, args, context, info) => {
  const inputUser = {
    ...args
  };
  const user = await new User(inputUser).save({ validateBeforeSave: true });

  return user;
};

const createBot = async (parent, args, context, info) => {
  const inputBot = {
    ...args
  };

  const bot = await new Bot(inputBot).save({ validateBeforeSave: true });

  return bot;
};

const createCard = async (parent, args, context, info) => {
  const { dialogId, botId, ...myArgs } = args;
  const inputCard = {
    ...myArgs
  };

  if (botId) {
    const bot = await Bot.findOne({ _id: botId });
    if (!bot) {
      throw new Error('No Bot exists for given botId');
    }
    const card = await new Card(inputCard).save({ validateBeforeSave: true });

    bot.cardsId.push(card);

    await bot.save();

    return card;
  } else if (dialogId) {
    // TODO
  } else {
    throw new Error('The card must be related to a bot or to a dialog');
  }
};

export default {
  createUser,
  createBot,
  createCard
};
