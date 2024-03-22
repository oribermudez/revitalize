import Appointment from '@/database/models/Appointment';
import connectMongo from '@/database';

await connectMongo();

export async function createAppointment(appointmentData) {
  try {
    const appointment = new Appointment(appointmentData);
    await appointment.save();
    return appointment;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
}

export async function getAllAppointments() {
  try {
    const appointments = await Appointment.find()
      .populate('service')
      .populate('therapist')
      .populate('client');
    return appointments;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
}

export async function getAppointmentById(appointmentId) {
  try {
    const appointment = await Appointment.findById(appointmentId)
      .populate('service')
      .populate('therapist')
      .populate('client');
    return appointment;
  } catch (error) {
    console.error('Error fetching appointment by ID:', error);
    throw error;
  }
}

export async function updateAppointment(appointmentId, updatedAppointmentData) {
  try {
    const appointment = await Appointment.findByIdAndUpdate(appointmentId, updatedAppointmentData, { new: true })
      .populate('service')
      .populate('therapist')
      .populate('client');
    return appointment;
  } catch (error) {
    console.error('Error updating appointment:', error);
    throw error;
  }
}

export async function deleteAppointment(appointmentId) {
  try {
    await Appointment.findByIdAndDelete(appointmentId);
    return true;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
}
