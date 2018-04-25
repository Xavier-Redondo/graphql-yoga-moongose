import Bot from '../database-models/bot';

const bots = async (root, args, context, info) => {
  const where = {
    ownerId: root._id
  };

  const result = await Bot.find(where).lean();

  return result;
};

export default {
  bots
};
