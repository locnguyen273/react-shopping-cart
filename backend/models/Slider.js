const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    imgMobile: { type: String, required: true },
    imgDesktop: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slider", SliderSchema);