import SOAP from '@/database/models/Soap';
import connectMongo from '@/database';

await connectMongo();

export async function createSOAP(soaData) {
  try {
    const soap = new SOAP(soaData);
    await soap.save();
    return soap;
  } catch (error) {
    console.error('Error creating SOAP:', error);
    throw error;
  }
}

export async function getAllSOAPs() {
  try {
    const soaps = await SOAP.find();
    return soaps;
  } catch (error) {
    console.error('Error fetching SOAPs:', error);
    throw error;
  }
}

export async function getSOAPById(soaId) {
  try {
    const soap = await SOAP.findById(soaId);
    return soap;
  } catch (error) {
    console.error('Error fetching SOAP by ID:', error);
    throw error;
  }
}

export async function updateSOAP(soaId, updatedSOAPData) {
  try {
    const soap = await SOAP.findByIdAndUpdate(soaId, updatedSOAPData, { new: true });
    return soap;
  } catch (error) {
    console.error('Error updating SOAP:', error);
    throw error;
  }
}

export async function deleteSOAP(soaId) {
  try {
    await SOAP.findByIdAndDelete(soaId);
    return true;
  } catch (error) {
    console.error('Error deleting SOAP:', error);
    throw error;
  }
}
