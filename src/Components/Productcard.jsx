"use client";

import { useState } from "react";
import Image from "next/image";
import { HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative max-w-sm rounded-xl bg-white shadow-lg overflow-hidden">
      
      {/* CLICKABLE AREA */}
      <Link href={`/products/${product.productSlug}`} >
        {/* Product Image */}
        <div className="relative h-96 w-full transform transition-all hover:scale-105">
          <Image
            src={product.image}
            alt={product.productName}
            fill
            className="object-cover"
          />

          {/* Like Button */}
          <button
            onClick={(e) => {
              e.preventDefault();    // stop link click
              e.stopPropagation();    // stop bubbling
              setLiked(!liked);
            }}
            className="absolute top-2 right-2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
          >
            <HeartIcon
              className={cn(
                liked ? "fill-red-600 stroke-red-600" : "stroke-gray-800",
                "w-5 h-5"
              )}
            />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{product.productName}</h3>
          <p className="text-gray-700 text-sm line-clamp-2">
            {product.productDetails}
          </p>

          {/* Tags (Example) */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="rounded-sm">
              EU38
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              Black & White
            </Badge>
          </div>
        </div>
      </Link>

      {/* Price & Add to Cart — NOT CLICKABLE LINK */}
      <div className="px-4 pb-4 mt-1 flex flex-col gap-2">
        <span className="text-xl flex items-center font-bold">
          <TbCurrencyTaka size={24} />
          {product.productPrice}
        </span>

        <Button
          onClick={() => addToCart(product)}
          className="cursor-pointer w-full flex items-center gap-2"
          size="lg"
        >
          <FaShoppingCart />
          Add to Cart
        </Button>
      </div>

    </div>
  );
};

export default ProductCard;
