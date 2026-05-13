import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patient:String,
  form:String,
  treatment:String,
  existing:Boolean,
  new:Boolean,

})

const User = mongoose.model("User", appointmentSchema);

export default User;
