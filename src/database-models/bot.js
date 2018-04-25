import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const BotSchema = new Schema(
  {
    name: { type: String, required: true },
    key: { type: String, required: true, index: { unique: true } },
    description: { type: String },
    defaultLocale: { type: String },
    status: { type: String },
    ownerId: { type: ObjectId, required: true, ref: 'User' }
  },
  { timestamps: true }
);

const Bot = mongoose.model('Bot', BotSchema);

export default Bot;
