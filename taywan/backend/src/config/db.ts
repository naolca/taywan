// config/db.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://firaolca:%23RHp2sEx_gznCGq@cluster0.ckozrjw.mongodb.net/?retryWrites=true&w=majority';

if (!MONGODB_URI) {
    throw new Error('MongoDB URI is not provided.');
}

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});
  
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

export default db;
