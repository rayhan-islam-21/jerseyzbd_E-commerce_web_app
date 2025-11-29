import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // URL or filename
    description: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

