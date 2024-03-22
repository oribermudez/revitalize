import Form from '@/database/models/Form';
import connectMongo from '@/database';

await connectMongo();

export async function createForm(formData) {
  try {
    const form = new Form(formData);
    await form.save();
    return form;
  } catch (error) {
    console.error('Error creating form:', error);
    throw error;
  }
}

export async function getAllForms() {
  try {
    const forms = await Form.find();
    return forms;
  } catch (error) {
    console.error('Error fetching forms:', error);
    throw error;
  }
}

export async function getFormById(formId) {
  try {
    const form = await Form.findById(formId);
    return form;
  } catch (error) {
    console.error('Error fetching form by ID:', error);
    throw error;
  }
}

export async function updateForm(formId, updatedFormData) {
  try {
    const form = await Form.findByIdAndUpdate(formId, updatedFormData, { new: true });
    return form;
  } catch (error) {
    console.error('Error updating form:', error);
    throw error;
  }
}

export async function deleteForm(formId) {
  try {
    await Form.findByIdAndDelete(formId);
    return true;
  } catch (error) {
    console.error('Error deleting form:', error);
    throw error;
  }
}
