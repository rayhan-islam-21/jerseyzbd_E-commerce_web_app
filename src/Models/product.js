import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    discountPrice: { type: Number },
    category: { type: String, required: true },
    details: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: [String], default: [] },
    stock: { type: Number, required: true, default: 0 },
    ratings: { type: Number, default: 0 },
    ratingsCount: { type: Number, default: 0 },
    tags: [String],
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);







