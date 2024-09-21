"use client";

import ProductCard from "../ProductCard";

export const Flashsale = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/Diskon/p1.png",
      NamaProduk: "Nama Produk 1",
      Harga: "Rp 10.900",
      Discount: "-50%",
      Terjual: "",
    },
    {
      id: 2,
      imageSrc: "/Diskon/p2.png",
      NamaProduk: "Nama Produk 2",
      Harga: "Rp 120.899",
      Discount: "-50%",
      Terjual: "",
    },
    {
      id: 3,
      imageSrc: "/Diskon/p3.png",
      NamaProduk: "Nama Produk 3",
      Harga: "Rp 67.402",
      Discount: "-70%",
      Terjual: "",
    },
    {
      id: 4,
      imageSrc: "/Diskon/p4.png",
      NamaProduk: "Nama Produk 4",
      Harga: "Rp 49.909",
      Discount: "-10%",
      Terjual: "",
    },
    {
      id: 5,
      imageSrc: "/Diskon/p5.png",
      NamaProduk: "Nama Produk 5",
      Harga: "Rp 80.128",
      Discount: "-60%",
      Terjual: "",
    },
    {
      id: 6,
      imageSrc: "/Diskon/p6.png",
      NamaProduk: "Nama Produk 6",
      Harga: "Rp 59.093",
      Discount: "-70%",
      Terjual: "",
    },
    {
      id: 7,
      imageSrc: "/Diskon/p6.png",
      NamaProduk: "Nama Produk 6",
      Harga: "Rp 67.093",
      Discount: "-10%",
      Terjual: "",
    },
  ];

  return (
    <>
      <div className="bg-white h-72 p-4 gap-4 flex-col flex">
        <div className="flex flex-row justify-between w-full h-8">
          <div className="font-medium text-[22px] leading-7 font-sans">
            Diskon Hari Ini
          </div>
          <div className="px-3 py-2">
            <button className="text-xs font-medium leading-4 font-sans text-primary">
              Lihat Semua
            </button>
          </div>
        </div>
        <div className="flex overflow-x-visible md:justify-between overflow-hidden">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              NamaProduk={product.NamaProduk}
              Harga={product.Harga}
              Discount={product.Discount}
              Terjual={product.Terjual}
            />
          ))}
        </div>
      </div>
    </>
  );
};
