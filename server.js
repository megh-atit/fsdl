import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/books.js';
import { MongoMemoryServer } from 'mongodb-memory-server';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/books', bookRoutes);

// Base route for testing (HTML Form)
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Add a Book</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 2rem; background: #fdfdfd; }
          .container { max-width: 500px; margin: 0 auto; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          h2 { text-align: center; color: #333; }
          .form-group { margin-bottom: 1rem; }
          label { display: block; font-weight: bold; margin-bottom: 0.5rem; }
          input { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
          button { width: 100%; background: #007bff; color: white; padding: 0.75rem; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer; }
          button:hover { background: #0056b3; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>📚 Add a New Book</h2>
          <form action="/api/books" method="POST" id="bookForm">
            <div class="form-group">
              <label for="title">Book Title*</label>
              <input type="text" id="title" name="title" required placeholder="e.g. The Hobbit">
            </div>
            <div class="form-group">
              <label for="author">Author Name*</label>
              <input type="text" id="author" name="author" required placeholder="e.g. J.R.R. Tolkien">
            </div>
            <div class="form-group">
              <label for="isbn">ISBN No*</label>
              <input type="text" id="isbn" name="isbn" required placeholder="e.g. 978-0547928227">
            </div>
            <div class="form-group">
              <label for="publishedYear">Published Year</label>
              <input type="number" id="publishedYear" name="publishedYear" placeholder="e.g. 1937">
            </div>
            <div class="form-group">
              <label for="genre">Genre</label>
              <input type="text" id="genre" name="genre" placeholder="e.g. Fantasy">
            </div>
            <button type="submit">Submit Book</button>
          </form>
          <script>
            document.getElementById('bookForm').addEventListener('submit', async function(e) {
              e.preventDefault();
              const formData = new FormData(this);
              const data = Object.fromEntries(formData.entries());
              
              try {
                const response = await fetch('/api/books', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });
                
                const result = await response.json();
                if (response.ok) {
                  alert(result.message + "! Check the JSON response at /api/books");
                  this.reset();
                  window.location.href = '/api/books'; // Redirect to see all books
                } else {
                  alert("Error: " + result.error);
                }
              } catch (err) {
                alert("Failed to submit");
              }
            });
          </script>
        </div>
      </body>
    </html>
  `);
});

// Database connection Setup
const startServer = async () => {
  try {
    // Spin up an auto-managed in-memory MongoDB
    console.log('Starting local MongoDB Memory Server...');
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
    console.log('Successfully connected to InMemory MongoDB at:', mongoUri);
    
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

startServer();
