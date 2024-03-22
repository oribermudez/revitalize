import { NextResponse } from 'next/server';
import { getServiceById, updateService, deleteService } from '@/database/services/service';

export const GET = async (req) => {
  const serviceId = req.nextUrl.pathname.split("/").pop();
  try {
    const service = await getServiceById(serviceId);
    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch service' }, { status: 500 });
  }
}

export const PUT = async (req) => {
  const updatedServiceData = await req.json();
  const serviceId = req.nextUrl.pathname.split("/").pop();
  try {
    const updatedService = await updateService(serviceId, updatedServiceData);
    console.log('updatedService', updatedService);
    return NextResponse.json(updatedService, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not update service' }, { status: 500 });
  }
}

export const DELETE = async (req, res) => {
  const serviceId = req.nextUrl.pathname.split("/").pop();
  try {
    await deleteService(serviceId);
    return NextResponse.json(
      { message: 'Service deleted successfully' },
      { status: 200},
    );
  } catch (error) {
    return NextResponse.json({ error: 'Could not delete service' }, { status: 500 });
  }
}
