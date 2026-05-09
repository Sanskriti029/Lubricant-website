import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "block md:inline-block p-3 rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-center";

  return (
    <nav className="bg-[#1a4782] px-6 py-4 text-white font-bold text-xl relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo & Name */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto sm:h-16 md:h-20 object-contain"
          />
          <h1 className="hidden sm:block text-lg md:text-xl">
            Vikas Automobiles
          </h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-2 lg:space-x-4">
          <Link to="/" className={linkStyle}>
            Home
          </Link>
          <Link to="/products" className={linkStyle}>
            Products
          </Link>
          <Link to="/about" className={linkStyle}>
            About
          </Link>
          <Link to="/contact" className={linkStyle}>
            Contact
          </Link>
          <Link to="/achievements" className={linkStyle}>
            Achievements
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-4 space-y-2 border-t border-blue-400 pt-4`}
      >
        <Link to="/" className={linkStyle} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link
          to="/products"
          className={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/about"
          className={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/achievements"
          className={linkStyle}
          onClick={() => setIsOpen(false)}
        >
          Achievements
        </Link>
      </div>
    </nav>
  );
}
