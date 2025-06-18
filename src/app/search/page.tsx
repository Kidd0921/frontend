'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PanelLeftOpen, PanelLeftClose } from 'lucide-react';
import { Product } from "@/types/product";
import ProductListing from "@/components/products/ProductListing";
import Pagination from "@/components/Pagination";
import FilterSideBar from "@/components/Filter/FilterSideBar";


const PRODUCTS_PER_PAGE = 4;
const  products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'Soft cotton t-shirt with a relaxed fit.',
    price: 29.99,
    image: '/product/watch.jpeg',
    category: 'Clothing',
    rating: 4.5,
    quantity: 2,
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    description: 'Denim jeans with a modern slim fit cut.',
    price: 59.99,
    image: '/product/watch.jpeg',
    category: 'Clothing',
    rating: 4.2,
    quantity: 20,
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight and comfortable running shoes.',
    price: 89.99,
    image: '/product/watch.jpeg',
    category: 'Footwear',
    rating: 4.8,
    quantity: 100,
  },
  {
    id: '4',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones.',
    price: 129.99,
    image: '/product/watch.jpeg',
    category: 'Electronics',
    rating: 4.6,
    quantity: 3,
  },
  {
    id: '5',
    name: 'Old Headphones',
    description: 'Old ear headphones.',
    price: 6.99,
    image: '/product/watch.jpeg',
    category: 'Electronics',
    rating: 2.6,
    quantity: 5,
  },
]
const SearchPage = () => {
  const searchParams = useSearchParams();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  return (
    <div
      className="flex"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(prev => !prev)}
        className={`hidden lg:flex flex-col z-50 py-5 px-3 ${sidebarOpen ? "bg-teal-700" : "bg-teal-600"} text-white ${sidebarOpen ? "hover:bg-teal-800" : "hover:bg-teal-700"} transition`}
      >
        {sidebarOpen ? <PanelLeftClose/> : <PanelLeftOpen/>}
      </button>

      {sidebarOpen && (
        <div className="hidden lg:block bg-teal-600 ">
          <FilterSideBar />
        </div>
      )}

      <div
        className="w-full"  
      >
        <ProductListing products={currentProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

 
    </div>

  )
}

export default SearchPage
