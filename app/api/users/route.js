import connectMongoDB from "@/libs/mongodb";

const { db } = await connectMongoDB();

// POST function in api/users/route.js
export async function POST(request) {
  try {
    console.log("POST request received");
    const body = await request.json();
    const { user } = body;

    let collection = "clients";

    // Check user's role and set the appropriate collection
    // if (user.role === "therapist") {
    //   collection = "therapists";
    // } else if (user.role === "client") {
    //   collection = "clients";
    // } else {
    //   return new Response(JSON.stringify({ message: "Invalid user role" }), {
    //     headers: { "Content-Type": "application/json" },
    //     status: 400,
    //   });
    // }

    // Check if user exists in the database
    const dbUser = await db
      .collection(collection)
      .findOne({ user_id: user.sub });
    if (!dbUser) {
      // If user doesn't exist, add them to the database
      await db.collection(collection).insertOne({ user_id: user.sub, ...user });
    }

    return new Response(
      JSON.stringify({
        message: `User data stored successfully in ${collection}.`,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 201,
      }
    );
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
