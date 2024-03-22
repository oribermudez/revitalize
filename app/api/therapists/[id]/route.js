import { NextResponse } from 'next/server';
import { getTherapistById, updateTherapist, deleteTherapist } from '@/database/services/therapist';

export const GET = async (req) => {
  const therapistId = req.nextUrl.pathname.split("/").pop();
  try {
    const therapist = await getTherapistById(therapistId);
    return NextResponse.json(therapist, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch therapist' }, { status: 500 });
  }
}

export const PUT = async (req) => {
  const updatedTherapistData = await req.json();
  const therapistId = req.nextUrl.pathname.split("/").pop();
  try {
    const updatedTherapist = await updateTherapist(therapistId, updatedTherapistData);
    console.log('updatedTherapist', updatedTherapist);
    return NextResponse.json(updatedTherapist, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not update therapist' }, { status: 500 });
  }
}

export const DELETE = async (req, res) => {
  const therapistId = req.nextUrl.pathname.split("/").pop();
  try {
    await deleteTherapist(therapistId);
    return NextResponse.json(
      { message: 'Therapist deleted successfully' },
      { status: 200},
    );
  } catch (error) {
    return NextResponse.json({ error: 'Could not delete therapist' }, { status: 500 });
  }
}
