"use client";

interface ProductCardProps {
  imageSrc: string;
  NamaProduk: string;
  Harga: string;
  Discount: string;
  Terjual: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  NamaProduk,
  Harga,
  Discount,
  Terjual,
}) => {
  return (
    <div className="w-[152px] md:items-center bg-white flex flex-nowrap relative ">
      {Discount && (
        <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-white text-sm font-semibold rounded-tl-md rounded-bl-md">
          {Discount}
        </div>
      )}
      <div className="flex flex-col w-[152px] h-56 p-4">
        <div className="object-cover w-[120px] h-[120px]">
          <img src={imageSrc} alt={NamaProduk} />
        </div>
        <div className="">
          <h3 className="text-gray-700 text-sm font-medium line-clamp-1">
            {NamaProduk}
          </h3>
          <p className="text-gray-900 text-lg font-bold mt-1">{Harga}</p>
          <p className="text-gray-500 text-right text-sm mt-2">{Terjual}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
