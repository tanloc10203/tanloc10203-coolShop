import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

let ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true, unique: true },
  thumbnail: { type: String },
  num: { type: Number },
  key_product: String,
  category_id: { type: ObjectId, ref: "Category" },
  delete: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);