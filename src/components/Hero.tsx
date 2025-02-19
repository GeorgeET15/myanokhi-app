"use client";
import React, { useEffect, useState, useRef } from "react";

const images = [
  "https://zola.in/cdn/shop/articles/wear_banner_1200x1200.jpg?v=1686815762",
  "https://samyakkclothing.files.wordpress.com/2023/03/main-banner-lehenga01.jpg",
  "https://medias.utsavfashion.com/media/wysiwyg/promotions/2023/2610/luxe-designer-wear-new.jpg",
  "https://www.samyakk.com/blog/wp-content/uploads/2021/10/NAVYA-BLOG.jpg",
  "https://www.samyakk.com/blog/wp-content/uploads/2023/05/Lehenga-Banner-Ashok.jpg",
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Preload images for better performance
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Image cycling logic
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Hero ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Hero;
