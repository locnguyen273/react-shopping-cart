const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    gender: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
