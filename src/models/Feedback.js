import mongoose from 'mongoose';

let ObjectId = mongoose.Types.ObjectId;

let GallerySchema = new mongoose.Schema({
  thumbnail: { type: String, required: true, unique: true },
  product_id: { type: ObjectId, ref: "Product"},
});

module.exports = mongoose.model('Gallery', GallerySchema);