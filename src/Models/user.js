import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  uid: { type: String, required: true, unique: true },
  role: {
    type: String,
    default: "user", 
  }
});

const user = mongoose.models.User || mongoose.model("user", UserSchema);
export default user;
