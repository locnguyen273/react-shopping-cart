const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    locate: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);