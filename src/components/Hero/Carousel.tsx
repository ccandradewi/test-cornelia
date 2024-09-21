"use client";
import { useState, useEffect } from "react";

const images = [
  { id: 1, imgsrc: "/hero1.png", alt: "Hero 1" },
  { id: 2, imgsrc: "/hero3.png", alt: "Hero 2" },
  { id: 3, imgsrc: "/hero2.png", alt: "Hero 3" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(${-currentIndex * 70}%)`,
          width: "fit",
        }}
      >
        {images.map((value) => (
          <img
            key={value.id}
            src={value.imgsrc}
            alt={value.alt}
            className="w-full h-full object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
