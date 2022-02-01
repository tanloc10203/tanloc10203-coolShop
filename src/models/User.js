import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

let UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  fullname: { type: String, required: true, unique: true },
  address: String,
  avatar: String,
  token: String,
  phone_number: String,
  gender: String,
  delete: Boolean,
  role_id: { type: ObjectId, ref: 'AllCode' }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);