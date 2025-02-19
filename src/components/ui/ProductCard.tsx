"use client";

import { useState } from "react";
import { Heart, Search } from "lucide-react";
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
  image: string;
  hoverImage: string;
}

export default function ProductCard({
  name,
  price,
  image,
  hoverImage,
}: ProductCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-80 h-[34rem] bg-white rounded-xl overflow-hidden transition-all duration-500 border border-gray-200 shadow-md"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-[25rem] overflow-hidden">
        <img
          src={hover ? hoverImage : image}
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
            <DialogContent className="max-w-md w-full max-h-[80vh] overflow-y-auto p-4 rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-lg font-semibold">
                  {name}
                </DialogTitle>
                <DialogDescription className="text-gray-500">
                  {price}
                </DialogDescription>
              </DialogHeader>
              <div className="w-full flex justify-center">
                <img
                  src={image}
                  alt={name}
                  className="w-full max-h-60 object-cover rounded-md"
                />
              </div>
              <p className="text-gray-600 text-sm mt-4">
                This dress is designed with premium fabrics to give you a
                stylish and comfortable look. Perfect for any occasion.
              </p>
              <div className="flex justify-center mt-4">
                <Button className="w-full">Add to Cart</Button>
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
