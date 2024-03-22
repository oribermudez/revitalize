import Therapist from '@/database/models/Therapist';
import connectMongo from '@/database';

await connectMongo();

export async function createTherapist(therapistData) {
  try {
    const therapist = new Therapist(therapistData);
    await therapist.save();
    return therapist;
  } catch (error) {
    console.error('Error creating therapist:', error);
    throw error;
  }
}

export async function getAllTherapists() {
  try {
    const therapists = await Therapist.find()
      .populate('availability')
      .populate('services');
    return therapists;
  } catch (error) {
    console.error('Error fetching therapists:', error);
    throw error;
  }
}

export async function getTherapistById(therapistId) {
  try {
    const therapist = await Therapist.findById(therapistId)
      .populate('availability')
      .populate('services');
    return therapist;
  } catch (error) {
    console.error('Error fetching therapist by ID:', error);
    throw error;
  }
}

export async function updateTherapist(therapistId, updatedTherapistData) {
  try {
    const therapist = await Therapist.findByIdAndUpdate(therapistId, updatedTherapistData, { new: true });
    return therapist;
  } catch (error) {
    console.error('Error updating therapist:', error);
    throw error;
  }
}

export async function deleteTherapist(therapistId) {
  try {
    await Therapist.findByIdAndDelete(therapistId);
    return true;
  } catch (error) {
    console.error('Error deleting therapist:', error);
    throw error;
  }
}