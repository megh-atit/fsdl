import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  publishedYear: {
    type: Number,
  },
  genre: {
    type: String,
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

export const Book = mongoose.model('Book', bookSchema);
