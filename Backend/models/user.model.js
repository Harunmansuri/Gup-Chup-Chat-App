import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
  },
  {
    timestamps: true, //createed at
  }
);

const User = mongoose.model("User", userSchema);
export default User;