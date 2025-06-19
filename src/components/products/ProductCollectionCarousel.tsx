'use client'

import ProductCollection from "@/components/products/ProductCollection"
import { Product } from "@/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "Soft cotton t-shirt with a relaxed fit.",
    price: 29.99,
    image: "/product/watch-3.jpeg",
    category: "Clothing",
    rating: 4.5,
    quantity: 10,
  },
  {
    id: "2",
    name: "Sporty Sneakers",
    description: "Comfortable sneakers for everyday wear.",
    price: 89.99,
    image: "/product/watch.jpeg",
    category: "Shoes",
    rating: 4.2,
    quantity: 7,
  },
  {
    id: "3",
    name: "Blue Denim Jacket",
    description: "Classic denim with a modern fit.",
    price: 59.99,
    image: "/product/watch.jpeg",
    category: "Clothing",
    rating: 4.8,
    quantity: 5,
  },
  {
    id: "4",
    name: "Leather Handbag",
    description: "Stylish leather handbag for casual outings.",
    price: 120.0,
    image: "/product/watch-3.jpeg",
    category: "Accessories",
    rating: 4.7,
    quantity: 8,
  },
  {
    id: "5",
    name: "Smart Watch",
    description: "Track your fitness and notifications.",
    price: 199.99,
    image: "/product/watch-2.jpeg",
    category: "Gadgets",
    rating: 4.3,
    quantity: 12,
  },
  {
    id: "6",
    name: "Slim Fit Jeans",
    description: "Modern cut slim fit jeans for daily wear.",
    price: 49.99,
    image: "/product/watch.jpeg",
    category: "Clothing",
    rating: 4.6,
    quantity: 6,
  },
];

const ProductCollectionCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
      <div
        className="relative"
      >
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow hover:bg-gray-100 z-10"
          onClick={scrollLeft}
        >
          <ChevronLeft />
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full hover:bg-gray-100 shadow z-10"
          onClick={scrollRight}
        >
          <ChevronRight />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 px-4 overflow-x-auto scrollbar-hide"
        >
            <ProductCollection title="Trending Now" products={mockProducts.slice(0, 4)} />
            <ProductCollection title="New Arrivals" products={mockProducts.slice(2, 6)} />
            <ProductCollection title="Top Rated" products={mockProducts.slice(1, 5)} />
            <ProductCollection title="Featured" products={mockProducts.slice(1, 5)} />
            <ProductCollection title="Amazing Prices" products={mockProducts.slice(1, 5)} />
        </div>
      </div>
  )
}

export default ProductCollectionCarousel
