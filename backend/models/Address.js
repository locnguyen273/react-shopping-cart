const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    locate: { type: String, required: true, unique: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);