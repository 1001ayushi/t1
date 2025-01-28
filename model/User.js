import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
});

export default mongoose.model("User", userSchema);
