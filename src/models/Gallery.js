import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

let FeedbackSchema = new mongoose.Schema({
  note: { type: String, required: true, unique: true },
  product_id: { type: ObjectId, ref: "Product"},
  user_id: { type: ObjectId, ref: "User"},
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);