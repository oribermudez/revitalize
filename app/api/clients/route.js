import { NextResponse } from 'next/server';
import { getAllClients, createClient } from '@/database/services/clientService';

export const GET = async () => {
  try {
    const clients = await getAllClients();
    return NextResponse.json(clients, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch clients' }, { status: 500 });
  }
}

export const POST = async (req) => {
  const clientData = await req.json();
  try {
    const newClient = await createClient(clientData);
    return NextResponse.json(newClient, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create new client' }, { status: 500 });
  }
}