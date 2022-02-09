import mongoose from "mongoose";

let ObjectId = mongoose.Types.ObjectId;

let ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true, unique: true },
    num: { type: Number },
    key_product: String,
    disc: String,
    thumbnail: { type: String },
    detail: { type: String },
    rate: { type: Number },
    view: Number,
    delete: Boolean,
    category_id: { type: ObjectId, ref: "Category" },
    discount_id: { type: ObjectId, ref: "Discount" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
