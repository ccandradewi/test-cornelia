import { Section2 } from "./Section2";
import { Section3 } from "./Section3";

export const Footer = () => {
  return (
    <footer className=" text-[#19191B] px-4 md:pt-4 pb-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:grid-cols-3">
          <div className="flex-col flex gap-4">
            <h3 className="font-medium text-base leading-6">
              Layanan Pelanggan
            </h3>
            <ul className="space-y-2 font-normal text-xs leading-4 ">
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Cara Pembelian
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Pengiriman
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Pengembalian Barang dan Dana
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Metode Pembayaran
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-col flex gap-4">
            <h3 className="font-medium text-base leading-6">Jelajahi idshop</h3>
            <ul className="space-y-2 font-normal text-xs leading-4">
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  idshop Security
                </a>
              </li>
              <li>
                <a href="#" className="border-b border-gray-400 pb-1 block">
                  id Mall
                </a>
              </li>
            </ul>
          </div>
          <div className="gap-4 h-[95px]">
            <div className="font-medium text-base leading-6">
              Unduh Aplikasi
            </div>
            <div className="h-[55px] justify-between flex flex-row md:flex-col">
              <img src="/Footer/Google Play.png" alt="Google Play" />
              <img src="/Footer/App Store.png" alt="App Store" />
            </div>
          </div>
        </div>
      </div>
      <Section2 />
      <Section3 />
    </footer>
  );
};
