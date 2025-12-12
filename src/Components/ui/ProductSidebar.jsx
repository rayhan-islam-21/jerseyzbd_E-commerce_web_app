"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Slider } from "../../Components/ui/slider";

// Icons
import {
  Star,
  Shirt,
  Tag,
  DollarSign,
  RotateCcw,
} from "lucide-react";

// ---------------------------------------------
// Data
// ---------------------------------------------
const categories = [
  "Men Jerseys",
  "Women Jerseys",
  "Kids Jerseys",
  "Club Jerseys",
  "International Jerseys",
];

const brands = ["Nike", "Adidas", "Puma", "Umbro"];
const ratings = [5, 4, 3, 2, 1];

// ---------------------------------------------
// Utility Components
// ---------------------------------------------
const StarRatingDisplay = ({ count }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < count
            ? "fill-amber-500 text-amber-500"
            : "fill-gray-300 text-gray-300 dark:fill-gray-700 dark:text-gray-700"
        }`}
      />
    ))}
  </div>
);

const SectionTitle = ({ icon: Icon, title }) => (
  <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-4">
    <Icon className="h-5 w-5 text-gray-900 dark:text-gray-200" />
    {title}
  </h3>
);

// ---------------------------------------------
// Component
// ---------------------------------------------
const ProductSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);

  const toggleSelect = (list, setList, value) => {
    setList(
      list.includes(value)
        ? list.filter((i) => i !== value)
        : [...list, value]
    );
  };

  const resetFilters = () => {
    setPriceRange([0, 5000]);
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRating(null);
  };

  const formatPrice = (price) => `${price.toLocaleString()} BDT`;

  return (
    <div
      className="
      w-72 p-8  
      bg-white dark:bg-gray-950 
       dark:border-gray-800 
      shadow-xs
      sticky top-6 h-fit
      transition-all duration-500
    "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-7 pb-5 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight">
          Filters
        </h2>

        <Button
          variant="ghost"
          size="sm"
          onClick={resetFilters}
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white flex items-center gap-1"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      {/* Scrollable Items */}
      <div className="space-y-10 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">

        {/* Categories */}
        <section>
          <SectionTitle icon={Shirt} title="Categories" />

          <div className="space-y-2">
            {categories.map((cat) => (
              <label
                key={cat}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all
                  ${
                    selectedCategories.includes(cat)
                      ? "bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                      : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-900/40"
                  }
                `}
              >
                <Checkbox
                  checked={selectedCategories.includes(cat)}
                  onCheckedChange={() =>
                    toggleSelect(selectedCategories, setSelectedCategories, cat)
                  }
                />
                <span className="text-gray-800 dark:text-gray-300 text-sm font-medium">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Price */}
        <section>
          <SectionTitle icon={DollarSign} title="Price Range" />

          <div className="flex justify-between text-sm font-bold text-gray-800 dark:text-gray-200 mb-5">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>

          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={10000}
            step={100}
          />
        </section>

        {/* Brands */}
        <section>
          <SectionTitle icon={Tag} title="Brands" />

          <div className="space-y-2">
            {brands.map((brand) => (
              <label
                key={brand}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all
                  ${
                    selectedBrands.includes(brand)
                      ? "bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                      : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-900/40"
                  }
                `}
              >
                <Checkbox
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() =>
                    toggleSelect(selectedBrands, setSelectedBrands, brand)
                  }
                />
                <span className="text-gray-800 dark:text-gray-300 text-sm font-medium">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Ratings */}
        <section>
          <SectionTitle icon={Star} title="Rating" />

          <div className="space-y-2">
            {ratings.map((rating) => (
              <label
                key={rating}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all
                  ${
                    selectedRating === rating
                      ? "bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                      : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-900/40"
                  }
                `}
              >
                <Checkbox
                  checked={selectedRating === rating}
                  onCheckedChange={() =>
                    setSelectedRating(selectedRating === rating ? null : rating)
                  }
                />

                <div className="flex items-center gap-3">
                  <StarRatingDisplay count={rating} />
                  <span className="text-gray-600 dark:text-gray-400 text-xs font-medium">
                    {rating}.0 & Up
                  </span>
                </div>
              </label>
            ))}
          </div>
        </section>

      </div>

      {/* Footer Button */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
        <Button className="
          w-full h-12 text-base font-semibold 
          bg-black text-white hover:bg-gray-800 
          dark:bg-white dark:text-black dark:hover:bg-gray-200
          shadow-lg shadow-black/10 dark:shadow-white/10 
          tracking-wide
        ">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default ProductSidebar;

/* OPTIONAL: ADD TO YOUR GLOBAL CSS */

