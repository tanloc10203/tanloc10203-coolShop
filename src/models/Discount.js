import mongoose from 'mongoose';

let DiscountSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Discount', DiscountSchema);