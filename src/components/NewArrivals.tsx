import React from "react";
import ProductCard from "./ui/ProductCard";

const NewArrivals = () => {
  const products = [
    {
      name: "Elegant Red Dress",
      price: "₹2800",
      images: [
        "https://myanokhi.in/cdn/shop/files/Newupload11th4.jpg?v=1731329062&width=823",
        "https://myanokhi.in/cdn/shop/files/New_upload_11th_8.jpg?v=1731326879&width=823",
        "https://myanokhi.in/cdn/shop/files/SUJ_7338.jpg?v=1732029586&width=823",
      ],
      hoverImage:
        "https://myanokhi.in/cdn/shop/files/New_upload_11th_5.jpg?v=1731327214&width=823",
    },
    {
      name: "Classic Black Gown",
      price: "₹4000",
      images: [
        "https://myanokhi.in/cdn/shop/files/upload_12.jpg?v=1732030945&width=823",
        "https://myanokhi.in/cdn/shop/files/upload8.jpg?v=1732030535&width=823",
      ],
      hoverImage:
        "https://myanokhi.in/cdn/shop/files/upload_13.jpg?v=1732030569&width=823",
    },
    {
      name: "Chic White Summer Dress",
      price: "₹3600",
      images: [
        "https://myanokhi.in/cdn/shop/files/Anokhiupload1.jpg?v=1731330446&width=823",
        "https://myanokhi.in/cdn/shop/files/Anokhi_upload_3.jpg?v=1727855767&width=823",
      ],
      hoverImage:
        "https://myanokhi.in/cdn/shop/files/Anokhi_upload_2.jpg?v=1727855761&width=823",
    },
    {
      name: "Stylish Blue Midi Dress",
      price: "₹3000",
      images: [
        "https://myanokhi.in/cdn/shop/files/new_026b5072-77e6-476b-bbc1-4a904b3e3d6e.jpg?v=1731330558&width=823",
        "https://myanokhi.in/cdn/shop/files/Anokhi4.jpg?v=1727892697&width=823",
      ],
      hoverImage:
        "https://myanokhi.in/cdn/shop/files/Anokhi4.jpg?v=1727892697&width=823",
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
