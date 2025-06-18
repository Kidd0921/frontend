'use client'

import { useRef, useState } from "react"
import RangeSlider from "./RangeSlider";

const FilterMenu = () => {
  const categoryRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const ratingRef = useRef<HTMLDivElement>(null);
  const filterContentRef = useRef<HTMLDivElement>(null);


  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current && filterContentRef.current) {
      const top = ref.current.offsetTop - 96;
      filterContentRef.current.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex max-h-[40vh] pb-1">
      
      <div className="w-32 pl-2 bg-teal-500 space-y-4 overflow-y-auto custom-scrollbar">
        <h2 className="text-lg font-bold text-gray-200 mb-2">Filter By</h2>
        <div
          className="pl-1"
        >
          <button onClick={() => scrollTo(categoryRef)} className="block p-2 bg-transparent hover:bg-teal-700 text-gray-200 font-semibold rounded transition">By Category</button>
          <button onClick={() => scrollTo(priceRef)} className="block p-2 bg-transparent hover:bg-teal-700 text-gray-200 font-semibold rounded transition">Price Range</button>
          <button onClick={() => scrollTo(ratingRef)} className="block p-2 bg-transparent hover:bg-teal-700 text-gray-200 font-semibold rounded transition">Ratings</button>
        </div>

      </div>

      {/* Filter Sections */}
      <div 
        ref={filterContentRef}
        className="px-8 py-8 flex-1 bg-teal-700 space-y-20 overflow-y-auto custom-scrollbar"
      >
        <div ref={categoryRef} className="space-y-2">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {["Clothing", "Electronics", "Footwear", "Accessories"].map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-white text-teal-700 rounded hover:bg-teal-100 transition"
              >
                {cat}
              </button>
            ))}
          </div>
          <hr className="border-gray-300 mt-4" />
        </div>

        <div ref={priceRef} className="space-y-2">
          <div className="flex flex-col gap-x-1">
            <h3 className="text-lg font-semibold">Price Range</h3>
            <p className="font-semibold text-sm text-teal-400">
              Use slider or enter min and max price
            </p>
          </div>

          <RangeSlider
            initialMin={100}
            initialMax={800}
            min={0}
            max={1000}
            step={10}
            priceCap={50}
          />
        </div>

        <div ref={ratingRef} className="space-y-2">
          <h3 className="text-lg font-semibold">Ratings</h3>
          <div className="flex flex-col gap-2">
            <button
              key={5}
              className="px-4 py-1 bg-white text-teal-700 text-xs rounded hover:bg-teal-100 transition"
            >
              5 ★
            </button>
            {[4, 3, 2, 1].map((star) => (
              <button
                key={star}
                className="px-4 py-1 bg-white text-teal-700 text-xs rounded hover:bg-teal-100 transition"
              >
                {star} ★ & up
              </button>
            ))}
          </div>
          </div>
      </div>
    </div>
  )
}

export default FilterMenu
