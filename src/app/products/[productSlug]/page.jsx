import { connectDB } from "@/lib/db";
import Product from "@/models/Product";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";

const SingleProduct = async ({ params }) => {
  const { productSlug } = await params;

  // Fetch data first (server-side)
  let product;
  try {
    await connectDB();
    product = await Product.findOne({ productSlug }).lean();
  } catch (error) {
    console.error("DB Error:", error);
    return (
      <h1 className="text-center mt-10 text-2xl font-bold">
        Server error, please try again later.
      </h1>
    );
  }

  // Handle product not found
  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl font-bold">
        Product not found
      </h1>
    );
  }

  // Render JSX
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10">
      {/* Product Image */}
      <div className="w-full md:w-1/2 relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={product.image}
          alt={product.productName}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {product.productName}
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          {product.productDetails}
        </p>

        <div className="flex items-center gap-4 text-2xl font-bold text-gray-900 dark:text-white">
          <TbCurrencyTaka size={28} />
          <span>{product.productPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
