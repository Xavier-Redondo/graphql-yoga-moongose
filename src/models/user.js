import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  company: { type: String, required: true },
  firstNmae: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true, index: { unique: true } },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true }
});

const User = mongoose.model('Employer', UserSchema);

module.exports = User;
