import connectMongoDB from "@/database/mongodb";
import { ObjectId } from "mongodb";

const { db } = await connectMongoDB();

// Add a new document
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
        message: `New document added to ${collection} successfully.`,
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

// get document(s) with optional parameters
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

    const data = await db.collection(collection).find(query).toArray();
    console.log(data);
    return new Response(JSON.stringify(data), {
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

    const result = await db.collection(collection).findOneAndUpdate(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updatedFields },
      { returnOriginal: false } // return the updated document not the original
    );

    return new Response(
      JSON.stringify({
        message: `Document id#${id} in ${collection} updated successfully.`,
        updatedDocument: result.value, // send the updated document back so the state can be updated without another query
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
