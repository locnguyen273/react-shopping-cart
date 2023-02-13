const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    imgDetail: { type: Array, required: true },
    categories: { type: String, required: true },
    forGender: { type: String, required: true },
    size: { type: Array },
    color: { type: String },
    price: { type: Number, required: true },
    selling: { type: Boolean, default: false }, // true: bán chạy, false: bán bth
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
