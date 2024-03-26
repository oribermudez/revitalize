import Client from "@/database/models/Client";
import connectMongo from "@/database";

await connectMongo();

export async function createClient(clientData) {
  try {
    const client = new Client(clientData);
    await client.save();
    return client;
  } catch (error) {
    console.error("Error creating client:", error);
    throw error;
  }
}

export async function getAllClients() {
  try {
    const clients = await Client.find();
    return clients;
  } catch (error) {
    console.error("Error fetching clients:", error);
    throw error;
  }
}

export async function getClientById(clientId) {
  try {
    const client = await Client.findById(clientId);
    return client;
  } catch (error) {
    console.error("Error fetching client by ID:", error);
    throw error;
  }
}

export async function getClientByEmail(clientEmail) {
  try {
    const client = await Client.findOne({ email: clientEmail });
    return client;
  } catch (error) {
    console.error("Error fetching client by Email:", error);
    throw error;
  }
}

export async function updateClient(clientId, updatedClientData) {
  try {
    const client = await Client.findByIdAndUpdate(clientId, updatedClientData, {
      new: true,
    });
    return client;
  } catch (error) {
    console.error("Error updating client:", error);
    throw error;
  }
}

export async function deleteClient(clientId) {
  try {
    await Client.findByIdAndDelete(clientId);
    return true;
  } catch (error) {
    console.error("Error deleting client:", error);
    throw error;
  }
}
