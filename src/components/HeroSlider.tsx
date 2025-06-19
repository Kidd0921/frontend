'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    url: "/hero/hero-1.png",
    title: "Discover the Future of Style",
    subtitle: "Shop the latest tech-inspired fashion",
  },
  {
    id: 2,
    url: "/hero/hero-2.png",
    title: "Comfort Meets Elegance",
    subtitle: "Unmatched quality & timeless designs",
  },
  {
    id: 3,
    url: "/hero/hero-3.png",
    title: "Performance Redefined",
    subtitle: "Gear up for your best run ever",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={slide.url}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;
