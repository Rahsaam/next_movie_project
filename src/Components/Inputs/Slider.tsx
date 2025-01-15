"use client";
import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { ISliderProps } from "@/Types/SearchOptions";
import { cn } from "@/lib/utils";

const Slider: React.FC<ISliderProps> = ({
  min: initialMin,
  max: initialMax,
  step = 1,
  value = [initialMin, initialMax],
  onValueChange,
  className,
  formatLabel,
}) => {
  const [localValues, setLocalValues] = useState(value);
  const [min, setMin] = useState(initialMin); // State for min value
  const [max, setMax] = useState(initialMax); // State for max value

  const handleValueChange = (newValues: number[]) => {
    setLocalValues(newValues);
    setMin(newValues[0]); // Update min value
    setMax(newValues[1]); // Update max value
    if (onValueChange) {
      onValueChange(newValues);
    }
  };

  return (
    <div className="relative h-[100px]" style={{ width: "200px" }}>
      <div className="mb-[10px]">
        <span className="text-xs">{formatLabel ? formatLabel(min) : min}</span>
        <span className="text-xs">-</span>
        <span className="text-xs">{formatLabel ? formatLabel(max) : max}</span>
      </div>
      <div className="">
        <SliderPrimitive.Root
          min={initialMin}
          max={initialMax}
          step={step}
          value={localValues}
          onValueChange={handleValueChange}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-black">
            <SliderPrimitive.Range className="absolute h-full bg-white" />
          </SliderPrimitive.Track>

          {localValues.map((value, index) => (
            <React.Fragment key={index}>
              <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
            </React.Fragment>
          ))}
        </SliderPrimitive.Root>
      </div>
    </div>
  );
};

export default Slider;
