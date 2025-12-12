// app/products/[productSlug]/page.jsx
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import ProductDetail from "./ProductDetail"; // Client Component

const SingleProduct = async ({ params }) => {
  const { productSlug } = await params;

  let product;
  try {
    await connectDB();
    product = await Product.findOne({ productSlug }).lean(); // lean returns plain object
  } catch (error) {
    console.error("DB Error:", error);
    return <h1 className="text-center mt-10 text-2xl font-bold">Server error</h1>;
  }

  if (!product) {
    return <h1 className="text-center mt-10 text-2xl font-bold">Product not found</h1>;
  }

  // Convert to fully plain JS object for Client Component
  const plainProduct = JSON.parse(JSON.stringify(product));

  return <ProductDetail product={plainProduct} />;
};

export default SingleProduct;
