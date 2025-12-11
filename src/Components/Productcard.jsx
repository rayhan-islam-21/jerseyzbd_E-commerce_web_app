"use client";

import { useState } from "react";

import { HeartIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
} from "../Components/ui/card";

import { cn } from "@/lib/utils";
import Image from "next/image";

const Productcard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  console.log(product);

  return (
    <div className="relative max-w-md rounded-xl bg-gradient-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg">
      <div className="flex  items-center justify-center">
        <Image
          className="object-cover w-full"
          src={product.image}
          alt="jersey_image"
          width={200}
          height={200}
        />
      </div>
      <Button
        size="icon"
        onClick={() => setLiked(!liked)}
        className="bg-primary/10 hover:bg-primary/20 absolute top-4 right-4 rounded-full"
      >
        <HeartIcon
          className={cn(
            liked ? "fill-destructive stroke-destructive" : "stroke-white"
          )}
        />
        <span className="sr-only">Like</span>
      </Button>
      <Card className="border-none">
        <CardHeader>
          <CardTitle>{product.productName}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <Badge variant="outline" className="rounded-sm">
              EU38
            </Badge>
            <Badge variant="outline" className="rounded-sm">
              Black and White
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{product.productDetails}</p>
        </CardContent>
        <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase">Price</span>
            <span className="text-xl font-semibold">
              {product.productPrice}
            </span>
          </div>
          <Button size="lg">Add to cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Productcard;
