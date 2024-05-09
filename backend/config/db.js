import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`successfuly connected to MONGODB 😘`);
  } catch (error) {
    console.error(`Error ${error.message}`);
  }
};

export default connectDB;
