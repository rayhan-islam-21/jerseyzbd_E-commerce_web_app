"use client";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { IoMdCloudUpload } from "react-icons/io";
import ProductImage from "@/Components/ProductImage";
import saveProductTodb from "@/lib/saveProductTodb";

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      productSlug: "",
      productPrice: 50.0,
      productDiscount: 10,
      productCategory: "",
      productDetails: "",
      productStock: 100,
      productTags: "",
      isFeatured: false,
    },
  });

  const [images, setImages] = useState([]); // store uploaded image URLs
  const [loadingImages, setLoadingImages] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setUploaded(true);
    } else {
      setUploaded(false);
    }
  }, [images]);

  // --- Image Upload Handler ---
  const handleImageUpload = async (e) => {
    const files = e.target.files;
    if (!files) return;
    setLoadingImages(true);
    const uploadedUrls = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append(
        "upload_preset",
        `${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
      );

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        uploadedUrls.push(data.secure_url);
      } catch (error) {
        console.error("Upload error:", error);
        toast.error("Image upload failed!");
      }
    }

    setImages((prev) => [...prev, ...uploadedUrls]);
    setLoadingImages(false);
  };

  // ---- AUTO SLUG ----
  const toSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

  const productName = watch("productName");

  useEffect(() => {
    if (productName) {
      setValue("productSlug", toSlug(productName));
    }
  }, [productName, setValue]);

  const price = watch("productPrice");
  const discount = watch("productDiscount");
  const [discountPrice, setDiscountPrice] = useState(0);

  // Dynamic discount calculation
  useEffect(() => {
    const p = parseFloat(price) || 0;
    const d = parseFloat(discount) || 0;
    let discounted = p * (1 - d / 100);
    if (discounted < 0) discounted = 0;
    setDiscountPrice(discounted.toFixed(2));
  }, [price, discount]);

  const notify = () => {
    toast.success("Jersey added successfully!", { duration: 3000 });
  };

  const onSubmit = async (data) => {
    if (images.length === 0) {
      toast.error("Please upload at least one image!");
      return;
    }
    const payload = {
      ...data,
      discountPrice,
      tags: data.productTags.split(",").map((tag) => tag.trim()),
      image: images[0],
      images: images.slice(1),
    };
    console.log("Form Submitted:", payload);
   await saveProductTodb(payload);
    notify();

    reset();
    setImages([]); // reset images after submission
  };

  return (
    <div className="min-h-screen  p-6 md:p-10 flex justify-center items-start">
      <Toaster position="top-right" reverseOrder={false} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800/20 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-4xl"
      >
        <h2 className="text-3xl font-semibold text-white mb-6 pb-4 border-b border-gray-700">
          Add New Product
        </h2>
        {/* product image */}
        <div className="mb-6  bg-gray-800/90 p-6 rounded-2xl shadow-lg border border-gray-700">
          <Label
            htmlFor="productImage"
            className="text-gray-200 text-lg font-semibold"
          >
            Product Image
          </Label>

          {/* Upload Area */}
          <div
            className="relative mt-3 w-full h-48 flex flex-col items-center justify-center 
                  border-2 border-dashed border-gray-500 rounded-xl 
                  hover:border-gray-300 transition cursor-pointer bg-gray-700"
          >
            <div
              className={`${uploaded ? "hidden" : "block  place-items-center"}`}
            >
              <IoMdCloudUpload className="text-5xl text-gray-300 mb-2" />

              <p className="text-gray-300 text-sm font-medium">
                Drop your images here, or click to browse
              </p>
              <p className="text-gray-400 text-xs mt-1">
                1600 × 1200 (4:3) recommended • PNG, JPG, GIF allowed
              </p>
            </div>

            <Input
              id="productImage"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            {/* Images Preview */}
            <div className="flex gap-4 mt-4  top-0 flex-wrap">
              {images.map((img, idx) => (
                <ProductImage key={idx} src={img} width={100} height={100} />
              ))}
            </div>
          </div>

          {loadingImages && (
            <p className="text-sm text-yellow-400 mt-2">Uploading images...</p>
          )}
        </div>

        {/* Product Name & Slug */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="productName">Jersey Name</Label>
            <Input
              {...register("productName", {
                required: "Jersey name is required",
              })}
              placeholder="Argentina Home Jersey 2025"
            />
            {errors.productName && (
              <ErrorMsg>{errors.productName.message}</ErrorMsg>
            )}
          </div>

          <div>
            <Label htmlFor="productSlug">Slug</Label>
            <Input
              {...register("productSlug", { required: "Slug is required" })}
              placeholder="argentina-home-jersey-2025"
            />
            {errors.productSlug && (
              <ErrorMsg>{errors.productSlug.message}</ErrorMsg>
            )}
          </div>
        </div>

        {/* Price, Discount, Discount Price */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-end">
          <div>
            <Label htmlFor="productPrice">Price ($)</Label>
            <Input
              type="number"
              {...register("productPrice", { required: true, min: 0 })}
              placeholder="Price"
            />
          </div>
          <div>
            <Label htmlFor="productDiscount">Discount (%)</Label>
            <Input
              type="number"
              {...register("productDiscount", { min: 0, max: 100 })}
              placeholder="Discount"
            />
          </div>
          <div className="p-3 bg-gray-700 border border-gray-600 rounded-lg text-sm">
            <p className="font-medium text-gray-200">Discount Price:</p>
            <span className="text-2xl font-bold text-yellow-400">
              ${discountPrice}
            </span>
          </div>
        </div>

        {/* Category & Stock */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label htmlFor="productCategory">Category</Label>
            <Input
              {...register("productCategory", {
                required: "Category is required",
              })}
              placeholder="Football Jersey, Basketball Jersey"
            />
            {errors.productCategory && (
              <ErrorMsg>{errors.productCategory.message}</ErrorMsg>
            )}
          </div>

          <div>
            <Label htmlFor="productStock">Stock</Label>
            <Input
              type="number"
              {...register("productStock", { required: true, min: 0 })}
            />
          </div>
        </div>

        {/* Details */}
        <div className="mb-6">
          <Label htmlFor="productDetails">Details</Label>
          <textarea
            {...register("productDetails", {
              required: "Details are required",
            })}
            rows={4}
            placeholder="Example: Official Argentina Home Jersey 2025, breathable fabric, available in S-XL..."
            className="w-full p-3 border border-gray-600 rounded-lg text-gray-200 bg-gray-700 focus:ring-yellow-400 focus:border-yellow-400 transition duration-150 ease-in-out"
          />
          {errors.productDetails && (
            <ErrorMsg>{errors.productDetails.message}</ErrorMsg>
          )}
        </div>

        {/* Tags & Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <Label htmlFor="productTags">Tags (comma-separated)</Label>
            <Input
              {...register("productTags")}
              placeholder="football, argentina, messi, home, 2025"
            />
          </div>

          <Controller
            name="isFeatured"
            control={control}
            render={({ field }) => (
              <div className="flex items-center pt-8">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  className="w-5 h-5 text-yellow-400 bg-gray-600 border-gray-500 rounded focus:ring-yellow-400 cursor-pointer"
                />
                <Label
                  htmlFor="isFeatured"
                  className="ml-3 mb-0 text-base text-gray-200"
                >
                  Featured Jersey
                </Label>
              </div>
            )}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="highlight"
          className="w-full py-8 cursor-pointer text-black bg-yellow-400 rounded-lg font-semibold text-xl 
                     transition duration-300 ease-in-out hover:bg-yellow-500 
                     shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Add Jersey
        </Button>
      </form>
    </div>
  );
}

// --- Helper Components ---
const Label = ({ htmlFor, children, className = "" }) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium text-gray-200 mb-2 ${className}`}
  >
    {children}
  </label>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full p-3 border border-gray-600 rounded-lg text-gray-200 bg-gray-700 focus:ring-yellow-400 focus:border-yellow-400 transition duration-150 ease-in-out ${className}`}
  />
);

const ErrorMsg = ({ children }) => (
  <p className="text-red-500 mt-1 text-sm">{children}</p>
);
