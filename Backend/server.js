import express from 'express';
import userRoutes from './routes/userRoutes.js'; // Ensure the path is correct
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Initialize Express app
const app = express();
connectDB(); // Connect to the database

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// User routes
app.use('/api/users', userRoutes); // Use the user routes

// Start server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
