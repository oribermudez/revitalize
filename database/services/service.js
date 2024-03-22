import Service from '@/database/models/Service';
import connectMongo from '@/database';

await connectMongo();

export async function createService(serviceData) {
  try {
    const service = new Service(serviceData);
    await service.save();
    return service;
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
}

export async function getAllServices() {
  try {
    const services = await Service.find();
    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getServiceById(serviceId) {
  try {
    const service = await Service.findById(serviceId);
    return service;
  } catch (error) {
    console.error('Error fetching service by ID:', error);
    throw error;
  }
}

export async function updateService(serviceId, updatedServiceData) {
  try {
    const service = await Service.findByIdAndUpdate(serviceId, updatedServiceData, { new: true });
    return service;
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
}

export async function deleteService(serviceId) {
  try {
    await Service.findByIdAndDelete(serviceId);
    return true;
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
}
