import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpg";
import { products } from "../data/data";
import { useState } from "react";
const filteritems=[];
export default function Navbar() {

  const [searchTerm, setSearchTerm] = useState('');
  //  const [selectedCategory, setSelectedCategory] = useState('All');
 
   const categories = ['All', ...new Set(products.map(p => p.category))];
 
   const filteredProducts = products.filter(product => {
     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    //  const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    //  return matchesSearch && matchesCategory;
   });

  return (
    <nav className="bg-primary px-6 py-4 flex justify-between gap-4 text-white items-center font-bold text-xl">
       <img src={logo} alt="Logo"className="w-50 h-20"/>
      <h1 className="font-bold text-xl justify-center items-center">
        Vikas Automobiles</h1>

      <div className="space-x-4 ">
        <Link to="/" >Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/achievements">Achievements</Link>
        <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg text-black"
            />
      </div>

    </nav>
  );
}
// className="bg-blue-500 hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700 rounded-md px-4 py-2"