import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: {
    street: { type: String },
    city: { type: String },
    province: { type: String },
    postalCode: { type: String }
  },
  insurance: {
    provider: { type: String },
    policyNumber: { type: String },
    expiryDate: { type: Date },
    isVerified: { type: Boolean }
  },
  payment: {
    brand: { type: String },
    cardHolder: { type: String },
    expiryDate: { type: Date },
    cardNumber: { type: String },
    cardType: { type: String },
    bank: { type: String },
    isVerified: { type: Boolean }
  }
});

const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);

export default Client;
