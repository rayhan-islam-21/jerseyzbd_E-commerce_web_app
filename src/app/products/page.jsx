"use client";
import Productcard from "@/Components/Productcard";
import api from "@/lib/axios";
import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get("/product"); // use await
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1 className="text-center mt-10">Loading products...</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 max-w-6xl mx-auto p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <Productcard key={product._id} product={product} />
        ))
      ) : (
        <h1 className="text-center col-span-full">No products found.</h1>
      )}
    </div>
  );
};

export default Product;
