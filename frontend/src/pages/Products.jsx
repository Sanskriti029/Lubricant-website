import React from "react";
import call from "../assets/call.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.webp";
import mail from "../assets/mail.png";
import whatsapp from "../assets/whatsapp.png";
import thumbnail6 from "../assets/thumbnail6.jpg";
import Lubricants from "../assets/Lubricants products.jpg";
import { products } from "../data/data";


import { useNavigate } from "react-router-dom";

const images = Object.entries(
  import.meta.glob("../assets/images/*.{png,jpg,jpeg,svg}", { eager: true }),
).map(([path, mod], index) => {
  const fileName = path.split("/").pop();
  const cleanName = fileName.replace(/\.[^/.]+$/, "");

  const formattedName = cleanName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
console.log(formattedName);
  return {
    id: index,
    imageSrc: mod.default,
    imageAlt: formattedName,
    name: formattedName,
    href: "#",

  };
  
});


export default function Products() {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 py-12 text-center bg-gray-100">
        <h1 className="mx-auto text-center text-5xl md:text-6xl font-extrabold text-[#1a4782] mb-8 tracking-tight">
          Wide Range of Products available
        </h1>
        <img
          src={Lubricants}
          alt="Lubricants"
          className="mx-auto rounded-lg bg-gray-200 object-cover shadow-lg"
          
        />
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Products</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden "
              >
                <img
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className="h-50 aspect-square w-full object-cover"
                />

                <div className="p-3">
                  <h1 className="text-lg text-[#0B1F3A] font-bold truncate">
                    {image.name}
                  </h1>

                  <button
                    onClick={() => navigate(`/products/${image.id}`)}
                    className="bg-[#0B1F3A] text-white py-2 px-4 rounded-lg hover:bg-[#0A1A30]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


