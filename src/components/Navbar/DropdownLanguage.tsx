"use client";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const DropdownLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguange, setSelectedLanguage] = useState("Bahasa Indonesia");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (languange: string) => {
    setSelectedLanguage(languange);
    setIsOpen(false);
  };

  const languages = ["Bahasa Indonesia", "English"];

  return (
    <div className="relative md:inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
      >
        {selectedLanguange} <FaChevronDown className="w-5 h-5 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute left-0 w-full mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
          {languages.map((languange) => (
            <button
              key={languange}
              onClick={() => selectLanguage(languange)}
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
            >
              {languange}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownLanguage;
