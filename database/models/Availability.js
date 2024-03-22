import mongoose from 'mongoose';

const availabilitySchema = new mongoose.Schema({
  monday: {
    startTime: Date,
    endTime: Date
  },
  tuesday: {
    startTime: Date,
    endTime: Date
  },
  wednesday: {
    startTime: Date,
    endTime: Date
  },
  thursday: {
    startTime: Date,
    endTime: Date
  },
  friday: {
    startTime: Date,
    endTime: Date
  },
  saturday: {
    startTime: Date,
    endTime: Date
  },
  sunday: {
    startTime: Date,
    endTime: Date
  }
});

const Availability = mongoose.models.Availability || mongoose.model('Availability', availabilitySchema);

export default Availability;
