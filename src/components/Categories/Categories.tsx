"use client";
interface Category {
  name: string;
  icon: string;
}

export const Categories = () => {
  const category: Category[] = [
    {
      name: "Tas",
      icon: "/Bag.png",
    },
    { name: "Pakaian Wanita", icon: "/Dress.png" },
    { name: "Pakaian Pria", icon: "/T-shirt.png" },
    { name: "Sepatu Wanita", icon: "/Woman Shoe.png" },
    { name: "Sepatu Pria", icon: "/Man Shoe.png" },
    { name: "Hobi", icon: "/Hobby.png" },
    { name: "Makanan dan Minuman", icon: "/Food and Drink.png" },
    { name: "Perlengkapan Rumah", icon: "/Home and Living.png" },
    { name: "Komputer dan Aksesoris", icon: "/Laptop.png" },
    { name: "Ibu dan Anak", icon: "/Baby.png" },
    { name: "Perawatan dan Kecantikan", icon: "/Makeup.png" },
    { name: "Kesehatan", icon: "/Medicine.png" },
  ];
  return (
    <>
      <div className="bg-white p-4 gap-4 flex flex-col">
        <div>
          <div className="font-sans text-[22px] font-medium leading-[28px] tracking-[0.004em] text-left ">
            Kategory
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 ">
          {/* Category item */}
          {category.map((categories, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-[#AFB1B6] space-y-2 bg-white p-4"
            >
              <img
                src={categories.icon}
                alt={categories.name}
                className="text-teal-500 text-3xl"
              />
              <p className="text-sm text-center font-medium">
                {categories.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
