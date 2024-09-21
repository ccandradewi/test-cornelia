"use client";

export const Banner = () => {
  return (
    <>
      <div className="h-[1120px] md:h-[480px] flex flex-col gap-4">
        <div className="h-[552px] md:h-[260px]  gap-10 flex flex-col md:flex-row bg-secondary px-4 py-6">
          <img
            src="/special.png"
            className=" h-[200px] md:w-[383px] bg-cover"
            alt="Special Deal"
          />
          <div className="h-[280px] md:w-[577px] gap-8 flex flex-col">
            <div className="flex flex-col h-48 md:h-28 gap-6">
              <div className="flex flex-col font-sans font-normal text-[#19191B] text-5xl leading-[56px] ">
                PAY DAY SALE!!
              </div>
              <div className="font-sans text-[22px] font-medium leading-7 tracking-[0.004em] text-left">
                Nikmati promo spektakuler{" "}
                <span className="text-primary">idshop</span> setiap tanggal 25!
              </div>
              <button className="text-white bg-primary hover:bg-blue-600 focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                Ikuti Event
              </button>{" "}
            </div>
          </div>
        </div>
        <div className="h-[552px] md:h-[260px] gap-10 flex flex-col md:flex-row bg-primary px-4 py-6">
          <img
            src="/saveup.png"
            className=" h-[200px] md:w-[383px] bg-cover"
            alt="Save Up"
          />
          <div className="h-[280px] md:w-[577px] gap-8 flex flex-col">
            <div className="flex flex-col h-48 md:h-28 gap-6">
              <div className="flex flex-col font-sans font-normal text-secondary text-5xl leading-[56px] ">
                GRATIS ONGKIR 50%
              </div>
              <div className="font-sans text-[22px] text-white font-medium leading-7 tracking-[0.004em] text-left">
                Klaim voucher gratis ongkos kirim Kamu.
              </div>
              <button className="text-white bg-secondary hover:bg-blue-600 focus:ring-4  font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ">
                Klaim Voucher
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
