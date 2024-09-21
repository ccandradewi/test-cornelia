"use client";
import { BiSignal4 } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import DropdownLanguage from "./DropdownLanguage";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-primary text-white max-w-screen-lg md:hidden h-[51px] flex justify-between items-center p-4">
        <div className=" h-[19px] px-2 gap-2.5">9:41</div>
        <div className="flex gap-[5px]">
          <BiSignal4 />
          <FaWifi />
          <FaBatteryFull />
        </div>
      </div>
      <div className="hidden md:block ">
        <div className="flex flex-row justify-end pt-4">
          <DropdownLanguage />
          <button className="w-[77px] text-primary bg-white hover:bg-blue-600 focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
            Masuk
          </button>
          <button className="w-[77px] text-white bg-primary hover:bg-blue-600 focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
            Daftar
          </button>
        </div>
      </div>
      <div className="h-20 p-4 md:gap-32 flex gap-2 justify-between">
        <img className="hidden md:block" src="/logo.png" alt="logo" />
        <div className="min-w-[200px]">
          <div className="relative w-full">
            <input
              type="text"
              className="border-[#AFB1B6] w-full lg:w-[735px] h-[48px] text-gray-900 text-base rounded-lg bg-transparent placeholder:text-slate-400 border  pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Cari di idshop"
            />
            <button
              className="absolute hidden md:block top-1.5 right-3 h-8 w-[50px rounded bg-primary px-2 items-end  border border-transparent text-sm text-white transition-all "
              type="button"
            >
              Cari
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <CiShoppingCart className="w-14 h-12 px-4 py-3 text-primary text-xl cursor-pointer" />
          </div>
          <div>
            <FaBars
              className="w-14 h-12 px-4 py-3 md:hidden text-primary text-xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute p-4 flex flex-col justify-between top-0 right-0 w-full h-full bg-white z-10">
          <div className=" h-[403px] gap-10 flex flex-col">
            <div className=" flex flex-row justify-between">
              <img className="w-[171px]" src="/logo.png" alt="logo" />
              <FaArrowLeft className="text-primary" onClick={toggleMenu} />
            </div>
            <div>
              <DropdownLanguage />
            </div>
          </div>
          <div>
            <button className="w-full text-white bg-primary hover:bg-blue-600 focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
              Daftar
            </button>
            <button className="w-full text-primary bg-white hover:bg-blue-600 focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
              Masuk
            </button>
          </div>
        </div>
      )}
    </>
  );
};
