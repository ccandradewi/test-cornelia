"use client";

import ProductCard from "../ProductCard";

export const Recommen = () => {
  const products1 = [
    {
      id: 1,
      imageSrc: "/Rekomen/1.png",
      NamaProduk: "Pinka Lipstick - Red Cheery Bloom",
      Harga: "Rp 120.683",
      Discount: "",
      Terjual: "1,5RB Terjual",
    },
    {
      id: 2,
      imageSrc: "/Rekomen/2.png",
      NamaProduk: "Eye Shadow Mulan - Cold Tone",
      Harga: "Rp 80.837",
      Discount: "-20%",
      Terjual: "1RB Terjual",
    },
    {
      id: 3,
      imageSrc: "/Rekomen/3.png",
      NamaProduk: "Almond Milk - FreshkyMilk",
      Harga: "Rp 54.829",
      Discount: "-50%",
      Terjual: "456 Terjual",
    },
    {
      id: 4,
      imageSrc: "/Rekomen/4.png",
      NamaProduk: "Kaos Hitam Bulop - Size M",
      Harga: "Rp 83.092",
      Discount: "-20%",
      Terjual: "1RB Terjual",
    },
    {
      id: 5,
      imageSrc: "/Rekomen/5.png",
      NamaProduk: "Reed Diffuser Aromaterapi",
      Harga: "Rp 50.568",
      Discount: "-10%",
      Terjual: "10RB+ Terjual",
    },
    {
      id: 6,
      imageSrc: "/Rekomen/6.png",
      NamaProduk: "Alexa Ring - Titanium Silver Gold",
      Harga: "Rp 93.002",
      Discount: "-50%",
      Terjual: "1RB Terjual",
    },
  ];
  const products2 = [
    {
      id: 7,
      imageSrc: "/Rekomen/7.png",
      NamaProduk: "Kacamata Baca Murah",
      Harga: "Rp 45.903",
      Discount: "-25%",
      Terjual: "5RB Terjual",
    },
    {
      id: 8,
      imageSrc: "/Rekomen/8.png",
      NamaProduk: "Sepatu Kerja Wanita - Putih",
      Harga: "Rp 110.938",
      Discount: "",
      Terjual: "2.1RB Terjual",
    },
    {
      id: 9,
      imageSrc: "/Rekomen/9.png",
      NamaProduk: "Baju Wanita - Hijau Army",
      Harga: "Rp 39.748",
      Discount: "-10%",
      Terjual: "6.2RB Terjual",
    },
    {
      id: 10,
      imageSrc: "/Rekomen/10.png",
      NamaProduk: "Levis Wanita Premium",
      Harga: "Rp 320.739",
      Discount: "-50%",
      Terjual: "1.5RB Terjual",
    },
    {
      id: 11,
      imageSrc: "/Rekomen/11.png",
      NamaProduk: "Wadah Kaca Estetik",
      Harga: "Rp 29.478",
      Discount: "-80%",
      Terjual: "5RB Terjual",
    },
    {
      id: 12,
      imageSrc: "/Rekomen/12.png",
      NamaProduk: "Mechanical Wireless Keyboard - Visky",
      Harga: "Rp 490.379",
      Discount: "-10%",
      Terjual: "9.4RB Terjual",
    },
  ];
  return (
    <>
      <div className="h-[1596px] md:h-[572px] p-4 flex flex-col gap-4">
        <div className="font-medium text-[22px] leading-7 text-[#19191B]">
          Rekomendasi untuk Kamu
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-[752px] md:h-[240px]  gap-4 grid grid-cols-2 md:grid-cols-6">
            {products1.map((product1) => (
              <ProductCard
                key={product1.id}
                imageSrc={product1.imageSrc}
                NamaProduk={product1.NamaProduk}
                Harga={product1.Harga}
                Discount={product1.Discount}
                Terjual={product1.Terjual}
              />
            ))}
          </div>
          <div className="h-[752px] md:h-[240px] gap-4 grid grid-cols-2 md:grid-cols-6">
            {products2.map((product) => (
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
      </div>
    </>
  );
};
