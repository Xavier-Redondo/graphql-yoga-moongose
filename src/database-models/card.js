import mongoose from 'mongoose';

const { Schema } = mongoose;

const CardSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true }
  },
  { timestamps: true }
);

const Card = mongoose.model('Card', CardSchema);

export default Card;
