import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

// Thống kê
let StatisticSchema = new mongoose.Schema({
  product_id: { type: ObjectId, ref: "Product" },
  user_id: { type: ObjectId, ref: "User" },
  order_id: { type: ObjectId, ref: "Order"},
  num: { type: Number, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model('Statistic', StatisticSchema);

// * Thống kê danh sách bán hàng