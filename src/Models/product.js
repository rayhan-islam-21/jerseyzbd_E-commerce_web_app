import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    productName: { type: String, required: true },
    productSlug: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDiscount: { type: Number, default: 0 },
    discountPrice: { type: Number },
    productCategory: { type: String, required: true },
    productDetails: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: [String], default: [] },
    productStock: { type: Number, required: true, default: 0 },
    productTags: [String],
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);