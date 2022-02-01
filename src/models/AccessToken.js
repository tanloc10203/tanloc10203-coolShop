import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

let AccessTokenSchema = new mongoose.Schema({
  user_id: { type: ObjectId, ref: "User" },
  token: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('AccessToken', AccessTokenSchema);