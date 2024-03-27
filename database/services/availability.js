import Availability from '@/database/models/Availability';
import connectMongo from '@/database';

await connectMongo();

export async function createAvailability(availabilityData) {
  try {
    const availability = new Availability(availabilityData);
    await availability.save();
    return availability;
  } catch (error) {
    console.error('Error creating availability:', error);
    throw error;
  }
}

export async function getAllAvailabilities() {
  try {
    const availabilities = await Availability.find();
    return availabilities;
  } catch (error) {
    console.error('Error fetching availabilities:', error);
    throw error;
  }
}

export async function getAvailabilityById(availabilityId) {
  try {
    const availability = await Availability.findById(availabilityId);
    return availability;
  } catch (error) {
    console.error('Error fetching availability by ID:', error);
    throw error;
  }
}

export async function updateAvailability(availabilityId, updatedAvailabilityData) {
  try {
    const availability = await Availability.findByIdAndUpdate(availabilityId, updatedAvailabilityData, { new: true });
    return availability;
  } catch (error) {
    console.error('Error updating availability:', error);
    throw error;
  }
}

export async function deleteAvailability(availabilityId) {
  try {
    await Availability.findByIdAndDelete(availabilityId);
    return true;
  } catch (error) {
    console.error('Error deleting availability:', error);
    throw error;
  }
}
