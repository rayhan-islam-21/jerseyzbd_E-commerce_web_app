"use client";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const categories = ["Men Jerseys", "Women Jerseys", "Kids Jerseys", "Club Jerseys", "International Jerseys"];
const brands = ["Nike", "Adidas", "Puma", "Umbro"];
const ratings = [5, 4, 3, 2, 1];

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

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm h-fit sticky top-20">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Filters
      </h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">
          Categories
        </h3>
        <div className="space-y-3">
          {categories.map((cat, index) => (
            <label key={index} className="flex items-center space-x-3">
              <Checkbox
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() =>
                  toggleSelect(selectedCategories, setSelectedCategories, cat)
                }
              />
              <span className="text-gray-700 dark:text-gray-300">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">
          Price Range (BDT)
        </h3>
        <Slider
          defaultValue={[0, 5000]}
          value={priceRange}
          onValueChange={setPriceRange}
          max={10000}
          step={100}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
          <span>{priceRange[0]}</span>
          <span>{priceRange[1]}</span>
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">
          Brands
        </h3>
        <div className="space-y-3">
          {brands.map((brand, index) => (
            <label key={index} className="flex items-center space-x-3">
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() =>
                  toggleSelect(selectedBrands, setSelectedBrands, brand)
                }
              />
              <span className="text-gray-700 dark:text-gray-300">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-800 dark:text-gray-200 mb-3">
          Ratings
        </h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label
              key={rating}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <Checkbox
                checked={selectedRating === rating}
                onCheckedChange={() =>
                  setSelectedRating(
                    selectedRating === rating ? null : rating
                  )
                }
              />
              <span className="text-gray-700 dark:text-gray-300">
                {rating} Stars & Up
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-5">
        <Button className="w-full bg-black text-white hover:bg-gray-800">
          Apply Filters
        </Button>
        <Button
          variant="outline"
          className="w-full"
          onClick={resetFilters}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ProductSidebar;
