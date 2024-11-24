import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB Connected: ${connection.connection.name}`);
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
