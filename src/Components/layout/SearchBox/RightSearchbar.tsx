"use client";

import React from "react";
import Slider from "@/Components/Inputs/Slider";

export default function RightSearchbar() {
  const handleValueChange = (values: number[]) => {
   alert(values);
  };

  const sliders = [
    {
      min: 1888,
      max: 2025,
      step: 1,
      value: [1888, 2025],
      formatLabel: (value: number) => `${value}`,
    },
    {
      min: 1.0,
      max: 10.0,
      step: 0.1,
      value: [1.0, 10.0],
      formatLabel: (value: number) => `${value}`,
    },
  ];

  return (
    <div className="lg:w-3/12 w-full">
      {sliders.map((slider, index) => (
        <div key={index}>
          <Slider
            min={slider.min}
            max={slider.max}
            step={slider.step}
            value={slider.value}
            onValueChange={handleValueChange}
            formatLabel={slider.formatLabel}
          />
        </div>
      ))}
    </div>
  );
}