import { NextResponse } from 'next/server';
import { getSOAPById, updateSOAP, deleteSOAP } from '@/database/services/soap';

export const GET = async (req) => {
  const soapId = req.nextUrl.pathname.split("/").pop();
  try {
    const soap = await getSOAPById(soapId);
    return NextResponse.json(soap, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch SOAP note' }, { status: 500 });
  }
}

export const PUT = async (req) => {
  const updatedSOAPData = await req.json();
  const soapId = req.nextUrl.pathname.split("/").pop();
  try {
    const updatedSOAP = await updateSOAP(soapId, updatedSOAPData);
    console.log('updatedSOAP', updatedSOAP);
    return NextResponse.json(updatedSOAP, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not update SOAP note' }, { status: 500 });
  }
}

export const DELETE = async (req, res) => {
  const soapId = req.nextUrl.pathname.split("/").pop();
  try {
    await deleteSOAP(soapId);
    return NextResponse.json(
      { message: 'SOAP note deleted successfully' },
      { status: 200},
    );
  } catch (error) {
    return NextResponse.json({ error: 'Could not delete SOAP note' }, { status: 500 });
  }
}
