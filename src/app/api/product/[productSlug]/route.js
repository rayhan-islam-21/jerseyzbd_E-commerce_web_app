import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const { productSlug } = await params;
    const product = await Product.findOne({ productSlug });

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
