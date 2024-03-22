import mongoose from 'mongoose';

const soapSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  date: Date,
  subjective: String,
  objective: String,
  assessment: String,
  plan: String
});

const SOAP = mongoose.models.SOAP || mongoose.model('SOAP', soapSchema);

export default SOAP;
