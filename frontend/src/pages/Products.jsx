import React, { useState } from "react";
import call from "../assets/call.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.webp";
import mail from "../assets/mail.png";
import whatsapp from "../assets/whatsapp.png";
import thumbnail6 from "../assets/thumbnail6.jpg";
import Lubricants from "../assets/Lubricants products.jpg";
import { products } from "../data/data";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const filteritems=[];


export default function Products() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        <div className="bg-red-500 max-w-10xl px-4 py-12 ">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            /><FaSearch />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-[#0B1F3A] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-50 aspect-square w-full object-cover"
                />

                <div className="p-3">
                  <h1 className="text-lg text-[#0B1F3A] font-bold truncate">
                    {product.name}
                  </h1>

                  <button
                    onClick={() => navigate(`/products/${product.id}`)}
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
