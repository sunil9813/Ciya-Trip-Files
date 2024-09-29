import React, { useEffect, useRef } from "react";
import rangeSlider from "range-slider-input"; // Import the range-slider-input library
import "range-slider-input/dist/style.css"; // Import the CSS styles

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: [number, number]; // Change to a tuple
  onChange?: (values: [number, number], userInteraction: boolean) => void; // Change to accept a tuple
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = [25, 75], // Default to a tuple
  onChange,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderInstanceRef = useRef<ReturnType<typeof rangeSlider> | null>(null); // Specify the type here

  useEffect(() => {
    if (sliderRef.current) {
      sliderInstanceRef.current = rangeSlider(sliderRef.current, {
        min,
        max,
        step,
        value,
        onInput: (values: number[], userInteraction: boolean) => {
          if (onChange) {
            onChange(values as [number, number], userInteraction); // Cast to tuple
          }
        },
      });
    }

    return () => {
      // Cleanup the slider instance on unmount
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.removeGlobalEventListeners();
      }
    };
  }, [min, max, step, value, onChange]);

  return <div className="range-slider" ref={sliderRef} />;
};

export default RangeSlider;
