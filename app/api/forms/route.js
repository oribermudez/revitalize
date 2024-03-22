import { NextResponse } from 'next/server';
import { getAllForms, createForm } from '@/database/services/form';

export const GET = async () => {
  try {
    const forms = await getAllForms();
    return NextResponse.json(forms, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not fetch forms' }, { status: 500 });
  }
}

export const POST = async (req) => {
  const formData = await req.json();
  try {
    const newForm = await createForm(formData);
    return NextResponse.json(newForm, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Could not create new form' }, { status: 500 });
  }
}
