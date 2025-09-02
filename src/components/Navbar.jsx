import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { useState } from "react";

const Navbar = ({ setCategory, currentCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "Home",
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 text-xl font-bold cursor-pointer">
            News
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            {categories.map((cat) => {
              const lowerCat = cat.toLowerCase();
              return (
                <button
                  key={cat}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentCategory === lowerCat
                      ? "bg-gray-700"
                      : "hover:bg-gray-800"
                  }`}
                  onClick={() => setCategory((lowerCat==="home")?"general":lowerCat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          {categories.map((cat) => {
            const lowerCat = cat.toLowerCase();
            return (
              <button
                key={cat}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  currentCategory === lowerCat
                    ? "bg-gray-700"
                    : "hover:bg-gray-800"
                }`}
                onClick={() => {
                  setCategory(lowerCat);
                  setIsOpen(false);
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;