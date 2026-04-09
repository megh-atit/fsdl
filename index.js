import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import studentRoutes from './routes/students.js';
import bookRoutes from './routes/books.js';
import employeeRoutes from './routes/employees.js';
import flightRoutes from './routes/flights.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main Root
app.get('/', (req, res) => {
  res.send('MERN CRUD APIs are running!');
});

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/flights', flightRoutes);

import { MongoMemoryServer } from 'mongodb-memory-server';

// MongoDB Connection Setup
const startServer = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;
    
    // If no URI provided, spin up an auto-managed in-memory MongoDB!
    if (!mongoUri) {
      console.log('Starting local MongoDB Memory Server...');
      const mongoServer = await MongoMemoryServer.create();
      mongoUri = mongoServer.getUri();
    }

    await mongoose.connect(mongoUri);
    console.log(`MongoDB connected successfully to: ${mongoUri}`);
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }
};

startServer();
