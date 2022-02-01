import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

let DetailProductSchema = new mongoose.Schema({
  discription: String,
  view: Number,
  rate: { type: Number },
  product_id: { type: ObjectId, ref: "Product" },
  discount_id: { type: ObjectId, ref: "Discount" },
});

module.exports = mongoose.model('DetailProduct', DetailProductSchema);