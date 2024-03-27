import { NextResponse } from 'next/server';
import { getAvailabilityById, updateAvailability, deleteAvailability } from '@/database/services/availability';

export const GET = async (req) => {
  const availabilityId = req.nextUrl.pathname.split("/").pop();
  try {
    const availability = await getAvailabilityById(availabilityId);
    return NextResponse.json(availability, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch availability' }, { status: 500 });
  }
}

export const PUT = async (req) => {
  const updatedAvailabilityData = await req.json();
  const availabilityId = req.nextUrl.pathname.split("/").pop();
  try {
    const updatedAvailability = await updateAvailability(availabilityId, updatedAvailabilityData);
    console.log('updatedAvailability', updatedAvailability);
    return NextResponse.json(updatedAvailability, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not update availability' }, { status: 500 });
  }
}

export const DELETE = async (req, res) => {
  const availabilityId = req.nextUrl.pathname.split("/").pop();
  try {
    await deleteAvailability(availabilityId);
    return NextResponse.json(
      { message: 'Availability deleted successfully' },
      { status: 200},
    );
  } catch (error) {
    return NextResponse.json({ error: 'Could not delete availability' }, { status: 500 });
  }
}
