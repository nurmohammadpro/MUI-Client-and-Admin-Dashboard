import dotenv from "dotenv";
import mongoose from "mongoose";

export const MONGODB_URI =
  "mongodb+srv://nurmohammad1:VOoERaZRhBViY9Sb@mern7.qob3u.mongodb.net";

export const JWT_SECRET =
  "b5da1571ede14eda9a21903f7abda145a60fa6035ac1fb7140466a9c5963398e688f9cde94ebe98627c3294a619369ad3f06bc14ea9c11d6e91541a85e680c90";

dotenv.config();

const connetDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connetDB;
