import { NextResponse } from 'next/server';
import { getClientById, updateClient, deleteClient } from '@/database/services/client';

export const GET = async (req) => {
  const clientId = req.nextUrl.pathname.split("/").pop();
  try {
    const client = await getClientById(clientId);
    return NextResponse.json(client, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch client' }, { status: 500 });
  }
}

export const PUT = async (req) => {
  const updatedClientData = await req.json();
  const clientId = req.nextUrl.pathname.split("/").pop();
  try {
    const updatedClient = await updateClient(clientId, updatedClientData);
    console.log('updatedClient', updatedClient);
    return NextResponse.json(updatedClient, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not update client' }, { status: 500 });
  }
}

export const DELETE = async (req, res) => {
  const clientId = req.nextUrl.pathname.split("/").pop();
  try {
    await deleteClient(clientId);
    return NextResponse.json(
      { message: 'Client deleted successfully' },
      { status: 200},
    );
  } catch (error) {
    return NextResponse.json({ error: 'Could not delete client' }, { status: 500 });
  }
}
