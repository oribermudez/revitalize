import { NextResponse } from "next/server";
import {
  getAllAppointments,
  getAppointmentsForClient,
  getAppointmentsForTherapist,
  createAppointment,
} from "@/database/services/appointment";

export const GET = async (req) => {
  try {
    const clientId = req.nextUrl.searchParams.get("client");
    const therapistId = req.nextUrl.searchParams.get("therapist");
    let appointments;
    if (clientId) {
      appointments = await getAppointmentsForClient(clientId);
    } else if (therapistId) {
      appointments = await getAppointmentsForTherapist(therapistId);
    } else {
      appointments = await getAllAppointments();
    }
    return NextResponse.json(appointments, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not fetch appointments" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const appointmentData = await req.json();
  try {
    const newAppointment = await createAppointment(appointmentData);
    return NextResponse.json(newAppointment, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not create new appointment" },
      { status: 500 }
    );
  }
};
