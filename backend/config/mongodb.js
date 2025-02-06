import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log('DB Connected');
    });

    mongoose.connection.on('error', err => {
      console.error('DB Connection Error:', err);
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('MongoDB Connection Failed:', err.message);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
