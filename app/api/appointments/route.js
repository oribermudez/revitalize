import connectMongoDB from "@/libs/mongodb";
import { ObjectId } from "mongodb";
import { formatDate } from "@/app/utils/formatDate";

const { db } = await connectMongoDB();

// Add a new appointment
export async function POST(request) {
  try {
    console.log("POST request received");
    const body = await request.json();
    const collection = request.nextUrl.pathname.split("/").pop();

    // check if any fields are _id. Make it a MongoDB reference
    const objectIdPattern = /^[0-9a-fA-F]{24}$/;
    for (const key in body) {
      if (objectIdPattern.test(body[key])) {
        body[key] = ObjectId.createFromHexString(body[key]);
      }
    }

    await db.collection(collection).insertOne(body);

    return new Response(
      JSON.stringify({
        message: `New appointment added to ${collection} successfully.`,
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

// get appointments with optional parameters. Populate referenced documents and destructure
export async function GET(request) {
  try {
    console.log(`GET request received`);
    const collection = request.nextUrl.pathname.split("/").pop();
    const params = request.nextUrl.searchParams;
    const query = {};

    // Remove empty parameters
    params.forEach((value, key) => {
      if (value !== "") query[key] = value;
    });

    // Convert id string to Mongo ObjectId
    if (params.has("client")) {
      query.client = ObjectId.createFromHexString(params.get("client"));
    }

    let aggregationPipeline = [
      { $match: query }, // Same as .find(query)
    ];

    // Get referenced documents for appointments
    if (collection === "appointments") {
      aggregationPipeline.push(
        {
          $lookup: {
            from: "services", // Name of the collection to reference
            localField: "service", // Field in the current collection to match
            foreignField: "_id", // Field in the related collection to match
            as: "service", // Name of the field to store the populated documents
          },
        },
        {
          $lookup: {
            from: "clients",
            localField: "client",
            foreignField: "_id",
            as: "client",
          },
        },
        {
          $lookup: {
            from: "therapists",
            localField: "therapist",
            foreignField: "_id",
            as: "therapist",
          },
        }
        // {
        //   $unwind: "$service", // change array to a single document
        // },
        // {
        //   $unwind: "$client",
        // },
        // {
        //   $unwind: "$therapist",
        // }
      );
    }

    const data = await db
      .collection(collection)
      .aggregate(aggregationPipeline)
      .toArray();

    // Destructure the references
    const destructuredData = data.map((appointment) => {
      const { _id, service, therapist, status } = appointment;
      const { date, time } = formatDate(appointment.startTime); // Format date and time
      const serviceName = service[0].name; // service name
      const duration = service[0].length; // service duration
      const therapistName =
        therapist[0].firstName + " " + therapist[0].lastName;

      // console.log({
      //   _id,
      //   date,
      //   time,
      //   serviceName,
      //   duration,
      //   therapistName,
      //   status,
      // });
      return {
        _id,
        date,
        time,
        serviceName,
        duration,
        therapistName,
        status,
      };
    });

    return new Response(JSON.stringify(destructuredData), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
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

// Delete a document
export async function DELETE(request) {
  try {
    console.log("DELETE request received");
    const collection = request.nextUrl.pathname.split("/").pop();
    const id = request.nextUrl.searchParams.get("id");

    await db
      .collection(collection)
      .deleteOne({ _id: ObjectId.createFromHexString(id) });

    return new Response(
      JSON.stringify({
        message: `Document id#${id} deleted from ${collection} successfully.`,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
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

// Edit a document
export async function PUT(request) {
  try {
    console.log("PUT request received");
    const body = await request.json();
    const collection = request.nextUrl.pathname.split("/").pop();
    const id = request.nextUrl.searchParams.get("id");

    const { ...updatedFields } = body;

    const result = await db
      .collection(collection)
      .findOneAndUpdate(
        { _id: ObjectId.createFromHexString(id) },
        { $set: updatedFields },
        { returnOriginal: false }
      );

    return new Response(
      JSON.stringify({
        message: `Document id#${id} in ${collection} updated successfully.`,
        updatedDocument: result.value,
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
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
