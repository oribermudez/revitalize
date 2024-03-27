import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  length: Number,
  price: Number
});

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default Service;