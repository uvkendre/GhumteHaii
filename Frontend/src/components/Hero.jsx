import React, { useState, useEffect } from "react";

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
  ];

  const totalImages = images.length;

  // Automatic slide change every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3500); // Change slide every 3.5 seconds
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="relative w-full h-56 md:h-96 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "" : "opacity-0"
          }`}
        >
          <img
            src={image}
            className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={`Carousel item ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Hero;
