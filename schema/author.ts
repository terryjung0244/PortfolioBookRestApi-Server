import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: [true, 'Please add id field'] },
  firstName: { type: String, required: [true, 'Please add First name field'] },
  lastName: { type: String, required: [true, 'Please add Last name field'] }
});

export default mongoose.model('Author', authorSchema);
