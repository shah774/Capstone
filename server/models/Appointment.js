import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  username: String,
  id: Number,
  isMember: Boolean,
  appointmentTime: Date,
})

const User = mongoose.model("User", appointmentSchema);

export default User;
