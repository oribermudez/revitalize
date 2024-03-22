import { NextResponse } from 'next/server';
import { getFormById, updateForm, deleteForm } from '@/database/services/form';

export const GET = async (req) => {
  const formId = req.nextUrl.pathname.split("/").pop();
  try {
    const form = await getFormById(formId);
    return NextResponse.json(form, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch form' }, { status: 500 });
  }
}

export const PUT = async (req) => {
  const updatedFormData = await req.json();
  const formId = req.nextUrl.pathname.split("/").pop();
  try {
    const updatedForm = await updateForm(formId, updatedFormData);
    console.log('updatedForm', updatedForm);
    return NextResponse.json(updatedForm, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not update form' }, { status: 500 });
  }
}

export const DELETE = async (req, res) => {
  const formId = req.nextUrl.pathname.split("/").pop();
  try {
    await deleteForm(formId);
    return NextResponse.json(
      { message: 'Form deleted successfully' },
      { status: 200},
    );
  } catch (error) {
    return NextResponse.json({ error: 'Could not delete form' }, { status: 500 });
  }
}
