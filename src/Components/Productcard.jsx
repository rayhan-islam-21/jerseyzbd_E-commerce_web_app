'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HeartIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false)

  return (
  <div className="relative max-w-sm rounded-xl bg-[#FFFFFF] shadow-lg overflow-hidden ">
      {/* Product Image */}
      <div className="relative h-96 w-full transform transition-all hover:scale-105 ">
        <Image
          src={product.image}
          alt={product.productName}
          fill
          className="object-cover"
        />
        {/* Like Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
        >
          <HeartIcon
            className={cn(
              liked ? 'fill-red-600 stroke-red-600' : 'stroke-gray-800',
              'w-5 h-5'
            )}
          />
          <span className="sr-only">Like</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{product.productName}</h3>
        <p className="text-gray-700 text-sm line-clamp-2">{product.productDetails}</p>

        {/* Example Tags */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="rounded-sm">
            EU38
          </Badge>
          <Badge variant="outline" className="rounded-sm">
            Black & White
          </Badge>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold">{product.productPrice} Taka</span>
          <Button className="cursor-pointer" size="sm">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
