import mongoose from 'mongoose';

const { Schema } = mongoose;

const therapistSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  massagesTaken: Number,
  address: {
    street: { type: String },
    city: { type: String },
    province: { type: String },
    postalCode: { type: String }
  },
  sin: String,
  availability: {
    type: Schema.Types.ObjectId,
    ref: 'Availability'
  },
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service'
  }]
});

const Therapist = mongoose.models.Therapist || mongoose.model('Therapist', therapistSchema);

export default Therapist;
