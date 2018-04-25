import User from '../database-models/user';

const owner = async (root, args, context, info) => {
  const where = {
    _id: root.ownerId
  };

  const result = await User.findOne(where).lean();

  return result;
};

const cards = async (root, args, context, info) => {
  const where = {
    _id: root.ownerId
  };

  const result = await User.findOne(where).lean();

  return result;
};

export default {
  owner
};
