import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';

dotenv.config();

const app = express();

app.use(express.json());

await connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

