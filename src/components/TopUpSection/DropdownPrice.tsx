"use client";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const DropdownPrice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(10000);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectPrice = (price: number) => {
    setSelectedPrice(price);
    setIsOpen(false);
  };

  const prices = [10000, 20000, 50000, 100000];

  return (
    <div className="relative inline-block text-left md:w-[452px] ">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        {selectedPrice.toLocaleString("id-ID")}{" "}
        <FaChevronDown className="w-5 h-5 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute left-0 w-full mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
          {prices.map((price) => (
            <button
              key={price}
              onClick={() => selectPrice(price)}
              className={`block px-4 py-2 w-full text-start text-sm text-gray-700 hover:bg-gray-100 ${
                price === selectedPrice ? "border-l-4 border-teal-500" : ""
              }`}
            >
              {price.toLocaleString("id-ID")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownPrice;
