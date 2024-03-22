import { NextResponse } from 'next/server';
import { getAllServices, createService } from '@/database/services/service';

export const GET = async () => {
  try {
    const services = await getAllServices();
    return NextResponse.json(services, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch services' }, { status: 500 });
  }
}

export const POST = async (req) => {
  const serviceData = await req.json();
  try {
    const newService = await createService(serviceData);
    return NextResponse.json(newService, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create new service' }, { status: 500 });
  }
}
