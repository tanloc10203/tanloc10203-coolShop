import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

let OrderSchema = new mongoose.Schema({
  user_id: { type: ObjectId, ref: "User" },
  product_id: { type: ObjectId, ref: "Product" },
  quantity: { type: Number, required: true, unique: true },
  total_price: { type: Number, required: true, unique: true },
  order_date: Date,
  note: String,
  status_id: { type: ObjectId, ref: "AllCode" },
  order_id: { type: ObjectId, ref: "Order" }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);