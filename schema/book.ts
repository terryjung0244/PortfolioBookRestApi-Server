import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: [true, 'Please add id field'] },
  authorId: { type: String, unique: true, required: [true, 'Please add AuthorId field'] },
  title: { type: String, required: [true, 'Please add Title field'] },
  content: { type: String, required: [true, 'Please add Content field'] },
  genre: { type: String, required: [true, 'Please add Genre field'] },
});

export default mongoose.model('book', bookSchema);
