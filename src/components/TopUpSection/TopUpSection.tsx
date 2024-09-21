"use client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import DropdownPrice from "./DropdownPrice";

export const TopUpAndBill = () => {
  const [activeTab, setActiveTab] = useState<
    "pulsa" | "paketData" | "listrikpln" | "uangelektronik" | "airPDAM"
  >("pulsa");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-white p-4 pb-6 h-80 md:h-[200px] gap-4 flex flex-col">
        <div>
          <div className=" font-sans font-medium text-[22px] leading-7 tracking-[0.0004em] text-left">
            Top Up dan Tagihan
          </div>
        </div>
        <div className="gap-6 flex flex-col h-[236px]">
          <div className=" border-b border-transparent h-12 justify-between">
            <div className="w-full  max-w-sm md:max-w-full mx-auto">
              <div className="flex justify-between border-b">
                <button
                  className={`w-[151px] font-medium leading-6 text-center text-base  px-4 py-[10px] transition-colors duration-300 ${
                    activeTab === "pulsa"
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("pulsa")}
                >
                  Pulsa
                </button>
                <button
                  className={`w-[151px] px-4 py-[10px] font-medium leading-6 text-center text-base transition-colors duration-300 ${
                    activeTab === "paketData"
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("paketData")}
                >
                  Paket data
                </button>
                <button
                  className={`w-[151px] px-4 py-[10px] hidden md:block font-medium leading-6 text-center text-base transition-colors duration-300 ${
                    activeTab === "listrikpln"
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("listrikpln")}
                >
                  Listrik PLN
                </button>
                <button
                  className={`w-[151px] px-4 hidden md:block py-[10px] font-medium leading-6 text-center text-base transition-colors duration-300 ${
                    activeTab === "uangelektronik"
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("uangelektronik")}
                >
                  Uang Elektronik
                </button>
                <button
                  className={`w-[151px] hidden md:block px-4 py-[10px] font-medium leading-6 text-center text-base transition-colors duration-300 ${
                    activeTab === "airPDAM"
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("airPDAM")}
                >
                  Air PDAM
                </button>
                <button className="w-14 h-12 px-4 py-3">
                  <BsThreeDotsVertical
                    className=" md:cursor-not-allowed md:pointer-events-none"
                    onClick={toggleMenu}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[164px] flex flex-col md:flex-row gap-4 justify-between">
            <div>
              <input
                className="appearance-none border md:w-[452px] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Nomor Telpon"
                type="text"
                placeholder="Nomor Telpon"
              />
            </div>
            <DropdownPrice />
            <button
              type="button"
              className="text-primary md:max-h-[44px] bg-white  border border-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 focus:outline-none "
            >
              Beli
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute p-4 flex flex-col justify-between top-full right-0 w-full h-[400px] bg-white z-10">
          <div className=" h-[403px] gap-10 flex flex-col">
            <div className=" flex flex-row justify-between">
              <img className="w-[171px]" src="/logo.png" alt="logo" />
              <FaArrowLeft className="text-primary" onClick={toggleMenu} />
            </div>
            <div>
              <ul className="mt-4">
                <li className="mb-2">
                  <a href="#" className="text-lg font-medium text-gray-900">
                    Listrik PLN
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-lg font-medium text-gray-900">
                    Uang Elektronik
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-lg font-medium text-gray-900">
                    Air PDAM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
