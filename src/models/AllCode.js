import mongoose from 'mongoose';

let AllCodeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  code: { type: String, required: true, unique: true },
  keyMap: { type: String, required: true },
});

module.exports = mongoose.model('AllCode', AllCodeSchema);