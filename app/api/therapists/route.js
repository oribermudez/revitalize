import { NextResponse } from "next/server";
import {
  getAllTherapists,
  createTherapist,
  getTherapistByEmail,
} from "@/database/services/therapist";

export const GET = async (req) => {
  try {
    if (req.nextUrl.searchParams.has("email")) {
      const email = req.nextUrl.searchParams.get("email");
      const therapist = await getTherapistByEmail(email);
      if (!therapist) {
        return NextResponse.json(
          { message: "Therapist not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(therapist, {
        status: 200,
      });
    } else {
      const therapists = await getAllTherapists();
      return NextResponse.json(therapists, {
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Could not fetch therapists" },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  const therapistData = await req.json();
  try {
    const newTherapist = await createTherapist(therapistData);
    return NextResponse.json(newTherapist, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Could not create new therapist" },
      { status: 500 }
    );
  }
};
