'use client'

import Image from "next/image"
import { useState } from "react";
import ProductCarousel from "./ProductCarousel";

const images = [
  {
    id: 1,
    url: "/product/watch.jpeg",
  },
  {
    id: 2,
    url: "/product/watch-2.jpeg",
  },
  {
    id: 3,
    url: "/product/watch-3.jpeg",
  },
  {
    id: 4,
    url: "/product/watch-4.jpeg",
  },
];

const ProductImages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div
        className="h-[500px] relative mb-4"
      >
        <Image
          src={images[activeIndex].url}
          alt="product-image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <ProductCarousel images={images} visibleCount={3} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
    </>
  )
}

export default ProductImages
