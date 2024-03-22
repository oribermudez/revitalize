import { NextResponse } from 'next/server';
import { getAllAvailabilities, createAvailability } from '@/database/services/availability';

export const GET = async () => {
  try {
    const availabilities = await getAllAvailabilities();
    return NextResponse.json(availabilities, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch availabilities' }, { status: 500 });
  }
}

export const POST = async (req) => {
  const availabilityData = await req.json();
  try {
    const newAvailability = await createAvailability(availabilityData);
    return NextResponse.json(newAvailability, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create new availability' }, { status: 500 });
  }
}
