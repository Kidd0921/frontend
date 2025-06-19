import React from 'react'
import { ProductCategory } from '@/types/product'

const mockCategories: ProductCategory[] = [
  { id: "1", name: "Clothing", image: "/product/watch.jpeg" },
  { id: "2", name: "Shoes", image: "/product/watch.jpeg" },
  { id: "3", name: "Accessories", image: "/product/watch.jpeg" },
  { id: "4", name: "Gadgets", image: "/product/watch-3.jpeg" },
  { id: "5", name: "Clothing", image: "/product/watch.jpeg" },
  { id: "6", name: "Shoes", image: "/product/watch.jpeg" },
  { id: "7", name: "Accessories", image: "/product/watch.jpeg" },
  { id: "8", name: "Gadgets", image: "/product/watch-3.jpeg" },
]

const CategoryCarousel = () => {
  return (
    <div className="w-full px-4 md:px-8 py-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Popular Categories</h2>

      <div
        className="grid gap-4 sm:gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
      >
        {mockCategories.map((category) => (
          <div
            key={category.id}
            className="group cursor-pointer rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="w-full aspect-square relative overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2 text-center">
              <p className="text-sm font-medium text-gray-700 group-hover:text-teal-600 transition-colors">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryCarousel
