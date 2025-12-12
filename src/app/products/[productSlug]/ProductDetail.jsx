// app/products/[productSlug]/ProductDetail.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductDetail = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    console.log(`Added ${quantity} of ${product.productName} to cart`);
    // Add actual cart implementation here
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
        {/* -------------------- Images (Left Column) -------------------- */}
        <div className="w-full md:w-6/12 lg:w-7/12 flex flex-col gap-4 sticky top-4 self-start">
          {" "}
          {/* Sticky for better scroll experience */}
          {/* Main Display Image */}
          <div className="relative h-[480px] md:h-[600px] rounded-xl overflow-hidden shadow-xl bg-gray-50 border border-gray-100">
            {" "}
            {/* Clean background and subtle shadow */}
            <Image
              src={selectedImage}
              fill
              alt={product.productName}
              className="object-contain object-center transition-all duration-300 hover:scale-[1.03]"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3 mt-2 overflow-x-auto pb-2">
            {[product.image, ...(product.images || [])].map((img, idx) => (
              <div
                key={idx}
                className={`relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer 
         ${
           selectedImage === img
             ? "border-primary ring-2 ring-primary/50"
             : "border-gray-200 hover:border-gray-400 opacity-75"
         }`} // Used a primary color border
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt="thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* -------------------- Info (Right Column) -------------------- */}
        <div className="flex-1 flex flex-col gap-5 pt-4 md:pt-0">
          {/* Product Name & Price Group */}
          <div className="pb-4 border-b border-gray-200">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-snug tracking-tight">
              {product.productName}
            </h1>
            <div className="flex items-end gap-3 mt-3">
              <div className="text-4xl flex items-center font-black text-gray-900">
                {" "}
                {/* Primary price color is now black/dark gray */}
                <TbCurrencyTaka size={36} className="mt-1" />
                <span>{product.productPrice}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          {product.productTags?.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-sm font-medium text-gray-500 mr-1">
                Tags:
              </span>
              {product.productTags?.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline" // Used outline for a cleaner look
                  className="text-xs font-semibold rounded-full px-3 py-1 bg-gray-50 text-gray-600 border-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <hr className="my-2 text-gray-100" />

          {/* Description */}
          <h3 className="text-xl font-bold text-gray-800">Details</h3>
          <p className="text-gray-700 leading-relaxed -mt-3">
            {product.productDetails}
          </p>

          <hr className="my-2 text-gray-100" />

          {/* Quantity Selector */}
          <div className="flex flex-col gap-3">
            <label className="text-lg font-bold text-gray-800">
              Select Quantity
            </label>
            <div className="flex items-center gap-0 border border-gray-300 rounded-xl overflow-hidden w-fit">
              <Button
                onClick={decrease}
                className="w-12 h-12 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-r-none transition-all"
                variant="ghost"
                disabled={quantity <= 1} // Disabled button when quantity is 1
              >
                <FaMinus className="w-4 h-4" />
              </Button>
              <span className="w-12 text-center text-xl font-bold select-none border-x border-gray-300 py-2">
                {quantity}
              </span>
              <Button
                onClick={increase}
                className="w-12 h-12 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-l-none transition-all"
                variant="ghost"
              >
                <FaPlus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Call to Action Group */}
          <Button
            onClick={addToCart}
            size="lg"
            className="flex items-center gap-3 w-full mt-6 h-14 text-xl font-bold transition-all duration-300 transform hover:scale-[1.005] bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500/50" // High-contrast, action-oriented color
          >
            <FaShoppingCart className="w-5 h-5" /> Add to Cart
          </Button>

          <div className="mt-4 text-center text-sm text-gray-500 border-t pt-4">
            Secure checkout. | Fast shipping guaranteed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
