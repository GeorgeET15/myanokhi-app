import React from "react";
import ProductCard from "./ui/ProductCard";

const NewArrivals = () => {
  const products = [
    {
      name: "Elegant Red Dress",
      price: "₹2800",
      image:
        "https://www.lavanyathelabel.com/cdn/shop/files/01_LBL101KS352_6_1200x.jpg?v=1735980970",
      hoverImage:
        "https://www.lavanyathelabel.com/cdn/shop/files/LBL101KS352_3_800x.jpg?v=1735980971",
    },
    {
      name: "Classic Black Gown",
      price: "₹4000",
      image:
        "https://www.lavanyathelabel.com/cdn/shop/files/1_8a0433e7-c992-4d63-a3e1-b9b3991304de_800x.jpg?v=1735981098",
      hoverImage:
        "https://www.lavanyathelabel.com/cdn/shop/files/LBCL101KS256_4_d93a2e4e-82d3-459c-8120-5644f9fa7d11_800x.jpg?v=1735981098",
    },
    {
      name: "Chic White Summer Dress",
      price: "₹3600",
      image:
        "https://www.lavanyathelabel.com/cdn/shop/files/LBCL101KS240_5_7171499b-6cdd-4980-a585-0c9a6b799781_800x.jpg?v=1735981050",
      hoverImage:
        "https://www.lavanyathelabel.com/cdn/shop/files/LBCL101KS240_8_82a8290a-8602-472d-b7f1-0f5174bb93e7_800x.jpg?v=1735981050",
    },
    {
      name: "Stylish Blue Midi Dress",
      price: "₹3000",
      image:
        "https://www.lavanyathelabel.com/cdn/shop/files/01_lbl101ks464_11_800x.jpg?v=1735980712",
      hoverImage:
        "https://www.lavanyathelabel.com/cdn/shop/files/9_314b7d63-6739-45ef-97c7-ad0d5ac932ba_800x.jpg?v=1735980712",
    },
  ];

  return (
    <section className="py-12 px-6 text-center bg-gray-50">
      {/* Heading & Description */}
      <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Discover our latest trendy outfits, designed for style and comfort.
      </p>

      {/* Product Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {products.map((product, index) => (
          <div key={index} className="w-full min-h-[36rem]">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
