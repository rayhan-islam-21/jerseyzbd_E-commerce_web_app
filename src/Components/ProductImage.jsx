"use client";
import { CldImage } from "next-cloudinary";

export default function ProductImage({ src, width = 500, height = 500 }) {
  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      crop={{ type: "auto", source: true }}
      alt="Product Image"
    />
  );
}
