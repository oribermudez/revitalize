import { NextResponse } from 'next/server';
import { getAllAppointments, createAppointment } from '@/database/services/appointment';

export const GET = async () => {
  try {
    const appointments = await getAllAppointments();
    return NextResponse.json(appointments, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch appointments' }, { status: 500 });
  }
}

export const POST = async (req) => {
  const appointmentData = await req.json();
  try {
    const newAppointment = await createAppointment(appointmentData);
    return NextResponse.json(newAppointment, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create new appointment' }, { status: 500 });
  }
}
