"use client";

import { useState } from "react";
import { Heart, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProductCardProps {
  name: string;
  price: string;
  images: string[]; // Now accepts multiple images
  hoverImage: string;
}

export default function ProductCard({
  name,
  price,
  images,
  hoverImage,
}: ProductCardProps) {
  const [hover, setHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-80 h-[34rem] bg-white rounded-xl overflow-hidden transition-all duration-500 border border-gray-200 shadow-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-[25rem] overflow-hidden">
        <img
          src={hover ? hoverImage : images[0]}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        />

        {/* Hover Overlay with Buttons */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center gap-5 opacity-0 transition-all duration-500",
            hover && "opacity-100 bg-black/30 backdrop-blur-md"
          )}
        >
          <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition">
            <Heart className="w-6 h-6 text-red-500" />
          </button>

          {/* Magnify Icon with Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition">
                <Search className="w-6 h-6 text-gray-600" />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[700px] h-[500px] max-w-none overflow-hidden p-6 rounded-lg">
              <div className="flex gap-6">
                {/* Left Side: Image Carousel */}
                <div className="w-1/2 flex justify-center relative">
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>

                  <img
                    src={images[currentImage]}
                    alt={name}
                    className="w-full max-h-85 object-cover rounded-md"
                  />

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Right Side: Info & Actions */}
                <div className="w-1/2 flex flex-col justify-between">
                  <div>
                    <DialogHeader>
                      <DialogTitle className="text-xl font-semibold">
                        {name}
                      </DialogTitle>
                      <DialogDescription className="text-gray-500">
                        {price}
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-gray-600 text-sm mt-4">
                      This dress is designed with premium fabrics to give you a
                      stylish and comfortable look. Perfect for any occasion.
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="mt-6">
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 text-center bg-white">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-lg font-medium">{price}</p>

        {/* Action Buttons - Using shadcn */}
        <div className="mt-5 flex gap-4 justify-center">
          <Button variant="outline" className="w-32">
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="w-32 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
