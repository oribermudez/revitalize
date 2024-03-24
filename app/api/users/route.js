import connectMongoDB from "@/libs/mongodb";
import { createClient } from "@/database/services/client";
import { createTherapist } from "@/database/services/therapist";

// POST function in api/users/route.js
export async function POST(req) {
  try {
    const { db } = await connectMongoDB();
    console.log("User POST request received");
    const userData = await req.json();
    console.log(userData);
    const { user } = userData;

    // add users to therapist in auth0 dashboard
    // actions > library > custom > Set roles to a user template (login flow)
    // SPECIAL_ROLE_USERS : 'therapist1@example.com, therapist2@example.com'
    // SPECIAL_ROLE_NAME : 'therapist'
    // SPECIAL_ROLE_VALUE : 'true'
    if (user.therapist) {
      try {
        const newTherapist = await createTherapist(userData);
        return NextResponse.json(newTherapist, {
          status: 200,
        });
      } catch (error) {
        return NextResponse.json(
          { error: "Could not create new therapist" },
          { status: 500 }
        );
      }
    } else {
      try {
        const newClient = await createClient(userData);
        return NextResponse.json(newClient, {
          status: 200,
        });
      } catch (error) {
        return NextResponse.json(
          { error: "Could not create new client" },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Internal server error: " + error.message }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
