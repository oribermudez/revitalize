import { NextResponse } from 'next/server';
import { getAllSOAPs, createSOAP } from '@/database/services/soap';

export const GET = async () => {
  try {
    const soaps = await getAllSOAPs();
    return NextResponse.json(soaps, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch soaps' }, { status: 500 });
  }
}

export const POST = async (req) => {
  const soapData = await req.json();
  try {
    const newSoap = await createSOAP(soapData);
    return NextResponse.json(newSoap, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create new soap' }, { status: 500 });
  }
}
