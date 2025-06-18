'use client';

import { useState } from 'react';
import RangeSlider from './RangeSlider';

const FilterSideBar = () => {
  return (
    <aside className="bg-teal-600 text-white p-4 w-auto space-y-8 overflow-y-auto max-h-screen custom-scrollbar">
      {/* Category Filter */}
      <section>
        <h3 className="text-lg font-bold mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {['Clothing', 'Electronics', 'Footwear', 'Accessories'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-white text-teal-700 rounded hover:bg-teal-100 transition"
            >
              {cat}
            </button>
          ))}
        </div>
        <hr className="border-gray-300 mt-4" />
      </section>

      {/* Price Filter */}
      <section>
        <h3 className="text-lg font-bold mb-1">Price Range</h3>
        <p className="text-sm text-teal-100 mb-2">Use slider or input values</p>
        <RangeSlider
          initialMin={100}
          initialMax={800}
          min={0}
          max={1000}
          step={10}
          priceCap={50}
        />
      </section>

      {/* Ratings Filter */}
      <section>
        <h3 className="text-lg font-bold mb-2">Ratings</h3>
        <div className="flex flex-col gap-2">
          <button className="px-4 py-1 bg-white text-teal-700 text-xs rounded hover:bg-teal-100 transition">
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
      </section>
    </aside>
  );
};

export default FilterSideBar;
