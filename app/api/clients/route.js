import connectMongoDB from "@/libs/mongodb";
import { ObjectId } from "mongodb";

// TODO: use more globals to use 1 db connection instead of multiple
// use cache in mongodb.js?
const collection = "clients";
// const collection = db.collection("clients")
// const { db } = await connectMongoDB();

// Add a new client
export async function POST(request) {
  try {
    console.log("POST request received");
    const body = await request.json();
    const {
      firstName,
      lastName,
      address,
      email,
      phone,
      password,
      soapNotes,
      personalNotes,
    } = body;
    const { db } = await connectMongoDB();

    // check if client already exists
    const existingClient = await db
      .collection(collection)
      .findOne({ email: email }); // probably better to use _id
    if (existingClient) {
      return new Response(
        JSON.stringify({ message: "Error, client already exists." }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    // TODO: covert password to hash

    const newDocument = {
      firstName,
      lastName,
      address,
      email,
      phone,
      password,
      soapNotes,
      personalNotes,
    };

    await db.collection(collection).insertOne(newDocument);

    return new Response(
      JSON.stringify({ message: "New client added successfully." }),
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

// Search for client(s)
// if no parameters, get list of all clients
// if parameters, search for matching client(s)
// currently only first/last name but could be anything status/email/phone
export async function GET(request) {
  try {
    console.log("GET request received");
    const { db } = await connectMongoDB();

    // `/api/clients?firstName=${formData.firstName}&lastName=${formData.lastName}`
    const firstName = request.nextUrl.searchParams.get("firstName");
    const lastName = request.nextUrl.searchParams.get("lastName");

    const query = {};
    if (firstName) {
      query.firstName = firstName;
    }
    if (lastName) {
      query.lastName = lastName;
    }
    //console.log("Query: ", query);

    const data = await db.collection(collection).find(query).toArray();

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

// Delete client
export async function DELETE(request) {
  try {
    console.log("DELETE request received");
    const id = request.nextUrl.searchParams.get("id");
    const { db } = await connectMongoDB();

    await db.collection(collection).deleteOne({ _id: new ObjectId(id) });

    return new Response(
      JSON.stringify({ message: "Document deleted successfully." }),
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

// Edit a client
export async function PUT(request) {
  try {
    console.log("PUT request received");
    const id = request.nextUrl.searchParams.get("id");
    const body = await request.json();

    console.log("Body: ", body);

    const { ...updatedFields } = body;
    const { db } = await connectMongoDB();

    console.log("id: ", id);

    const result = await db.collection(collection).findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updatedFields },
      { returnOriginal: false } // return the updated document not the original
    );

    return new Response(
      JSON.stringify({
        message: "Client updated successfully.",
        updatedDocument: result.value, // send the updated document back so the state can be updated without another fetch
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
