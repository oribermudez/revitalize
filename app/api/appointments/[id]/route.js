import { NextResponse } from 'next/server';
import { getAppointmentById, updateAppointment, deleteAppointment } from '@/database/services/appointment';

export const GET = async (req) => {
  const appointmentId = req.nextUrl.pathname.split("/").pop();
  try {
    const appointment = await getAppointmentById(appointmentId);
    return NextResponse.json(appointment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch appointment' }, { status: 500 });
  }
}

export const PUT = async (req) => {
  const updatedAppointmentData = await req.json();
  const appointmentId = req.nextUrl.pathname.split("/").pop();
  try {
    const updatedAppointment = await updateAppointment(appointmentId, updatedAppointmentData);
    console.log('updatedAppointment', updatedAppointment);
    return NextResponse.json(updatedAppointment, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not update appointment' }, { status: 500 });
  }
}

export const DELETE = async (req, res) => {
  const appointmentId = req.nextUrl.pathname.split("/").pop();
  try {
    await deleteAppointment(appointmentId);
    return NextResponse.json(
      { message: 'Appointment deleted successfully' },
      { status: 200},
    );
  } catch (error) {
    return NextResponse.json({ error: 'Could not delete appointment' }, { status: 500 });
  }
}
