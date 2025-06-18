import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImage {
  id: number;
  url: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
  visibleCount?: number; // Default to 4
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, visibleCount = 4, activeIndex, setActiveIndex }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, images.length - visibleCount)
    );
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);
  
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Arrows */}
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {startIndex + visibleCount < images.length && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white text-teal-600 p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Carousel */}
      <div className="flex w-full justify-around overflow-hidden gap-4 px-10">
        {visibleImages.map((img, i) => (
          <div key={img.id} className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden" onMouseEnter={() => setActiveIndex(i)}>
            <Image
              src={img.url}
              alt={`carousel-${img.id}`}
              fill
              sizes="25vw"
              className={`object-cover rounded-md ${activeIndex === i ? "border-2 border-solid border-amber-500" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel
