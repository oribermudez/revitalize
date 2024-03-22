import { NextResponse } from 'next/server';
import { getAllTherapists, createTherapist } from '@/database/services/therapist';

export const GET = async () => {
  try {
    const therapists = await getAllTherapists();
    return NextResponse.json(therapists, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch therapists' }, { status: 500 });
  }
}

export const POST = async (req) => {
  const therapistData = await req.json();
  try {
    const newTherapist = await createTherapist(therapistData);
    return NextResponse.json(newTherapist, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create new therapist' }, { status: 500 });
  }
}
