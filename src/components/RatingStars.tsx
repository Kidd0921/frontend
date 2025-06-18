"use client";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingStarsProps {
  rating: number; // example: 4.3
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const full = i + 1 <= Math.floor(rating);
        const half = !full && i + 0.5 <= rating;

        if (full) {
          return <FaStar key={i} className="text-yellow-400" />;
        } else if (half) {
          return <FaStarHalfAlt key={i} className="text-yellow-400" />;
        } else {
          return <FaRegStar key={i} className="text-gray-300" />;
        }
      })}
    </div>
  );
};

export default RatingStars;
