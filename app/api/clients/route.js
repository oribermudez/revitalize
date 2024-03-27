import { NextResponse } from "next/server";
import {
  getAllClients,
  createClient,
  getClientByEmail,
} from "@/database/services/client";

export const GET = async (req) => {
  try {
    if (req.nextUrl.searchParams.has("email")) {
      const email = req.nextUrl.searchParams.get("email");
      const client = await getClientByEmail(email);
      if (!client) {
        return NextResponse.json(
          { error: "Client not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(client, {
        status: 200,
      });
    } else {
      const clients = await getAllClients();
      return NextResponse.json(clients, {
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Could not fetch clients" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const clientData = await req.json();
  try {
    const newClient = await createClient(clientData);
    return NextResponse.json(newClient, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not create new client" },
      { status: 500 }
    );
  }
};
