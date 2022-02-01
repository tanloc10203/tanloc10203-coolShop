import mongoose from 'mongoose';

let CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  delete: Boolean,
}, { timestamps: true});

module.exports = mongoose.model('Category', CategorySchema);