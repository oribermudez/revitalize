import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  formName: String,
  formContent: String,
  dateCreated: Date,
  dateUpdated: Date,
  isSigned: Boolean,
  signature: String
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;
