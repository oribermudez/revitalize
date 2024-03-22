import mongoose from 'mongoose';
import Service from './Service';
import Therapist from './Therapist';
import Client from './Client';

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  startTime: {
    type: Date,
    required: true
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: Service,
    required: true
  },
  therapist: {
    type: Schema.Types.ObjectId,
    ref: Therapist,
    required: true
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: Client,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: "pending"
  }
});

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

export default Appointment;
