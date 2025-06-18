'use client';

import { useState, useEffect, useRef } from 'react';

interface RangeSliderProps {
  initialMin: number;
  initialMax: number;
  min: number;
  max: number;
  step: number;
  priceCap: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
}) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const [isMinActive, setIsMinActive] = useState(false);

  useEffect(() => {
    if (progressRef.current) {
      const minPercent = ((minValue - min) / (max - min)) * 100;
      const maxPercent = ((maxValue - min) / (max - min)) * 100;
      progressRef.current.style.left = `${minPercent}%`;
      progressRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, maxValue, min, max]);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - priceCap);
    setMinValue(value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + priceCap);
    setMaxValue(value);
  };

  return (
    <div className="w-full max-w-md">
      {/* Input display */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Min</label>
          <input
            type="number"
            value={minValue}
            onChange={handleMin}
            min={min}
            max={maxValue - priceCap}
            step={step}
            className="w-24 p-1 border rounded"
          />
        </div>

        <span className="mx-2 text-lg font-medium">—</span>

        <div>
          <label className="block text-sm font-semibold mb-1">Max</label>
          <input
            type="number"
            value={maxValue}
            onChange={handleMax}
            min={minValue + priceCap}
            max={max}
            step={step}
            className="w-24 p-1 border rounded"
          />
        </div>
      </div>

      {/* Slider track */}
      <div className="slider relative h-2 rounded-full bg-gray-300">
        <div
          className="progress absolute h-2 bg-teal-400 rounded"
          ref={progressRef}
        ></div>
      </div>

      {/* Range sliders */}
      <div className="relative h-2 mt-2">
        <input
          onChange={handleMin}
          onMouseDown={() => setIsMinActive(true)}
          onMouseUp={() => setIsMinActive(false)}
          onTouchStart={() => setIsMinActive(true)}
          onTouchEnd={() => setIsMinActive(false)}
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
          style={{ zIndex: isMinActive ? 3 : 2 }}
        />

        <input
          onChange={handleMax}
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
          style={{ zIndex: isMinActive ? 2 : 3 }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
