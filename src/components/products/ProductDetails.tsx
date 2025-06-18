'use client';

import { Product } from "@/types/product";
import RatingStars from "../RatingStars";
import { useState } from "react";

const ProductDetails = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleQuantity = (type: "i" | "d") => {
    setQuantity((prev) => {
      if (type === "d" && prev > 1) return prev - 1;
      if (type === "i" && prev < product.quantity) return prev + 1;
      return prev;
    });
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6">
      {/* Name */}
      <h1 className="text-4xl font-semibold text-gray-900">{product.name}</h1>

      {/* Description */}
      <div className="text-gray-600 text-sm leading-relaxed relative">
        <p className={`${isExpanded ? "" : "line-clamp-3"}`}>
          {product.description}
        </p>
        {product.description.length > 120 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 text-teal-600 text-sm font-medium hover:underline"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        )}
      </div>

      {/* Rating */}
      <RatingStars rating={product.rating} />

      <hr className="border-t border-gray-200" />

      {/* Price */}
      <h2 className="text-2xl font-semibold text-gray-800">${product.price}</h2>

      <hr className="border-t border-gray-200" />

      {/* Stock Info */}
      {product.quantity < 1 ? (
        <p className="text-sm text-red-500 font-medium">Out of stock</p>
      ) : (
        <p className="text-sm text-orange-500">
          Only <strong>{product.quantity} left</strong> – order soon!
        </p>
      )}

      {/* Quantity Selector */}
      <div className="bg-gray-100 rounded-full px-4 py-2 w-fit flex items-center gap-4">
        <button
          onClick={() => handleQuantity("d")}
          disabled={quantity === 1}
          className="text-xl font-semibold px-2 text-gray-600 disabled:text-gray-300"
        >
          −
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          onClick={() => handleQuantity("i")}
          disabled={quantity === product.quantity}
          className="text-xl font-semibold px-2 text-gray-600 disabled:text-gray-300"
        >
          +
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => null}
          className="w-36 text-sm rounded-full border border-teal-600 text-teal-600 py-2 px-4 hover:bg-teal-600 hover:text-white transition disabled:bg-gray-300 disabled:text-white"
        >
          Buy Now
        </button>
        <button
          onClick={() => null}
          className="w-36 text-sm rounded-full border border-teal-600 text-teal-600 py-2 px-4 hover:bg-teal-600 hover:text-white transition disabled:bg-gray-300 disabled:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
