"use client";
export const Section3 = () => {
  const medsos = [
    { id: 1, imgsrc: "/Medsos/m1.png", Name: "TIKTOK" },
    { id: 2, imgsrc: "/Medsos/m2.png", Name: "IG" },
    { id: 2, imgsrc: "/Medsos/m3.png", Name: "YOUTUBE" },
    { id: 2, imgsrc: "/Medsos/m4.png", Name: "FACEBOOK" },
  ];
  return (
    <>
      <div className="container mx-auto px-4 border-t gap-6 flex flex-col md:flex-row md:justify-between">
        <div className="font-medium text-sm leading-5">
          © idshop 2024. Hak Cipta Dilindungi
        </div>
        <div className="gap-2 flex flex-col">
          <div className="font-medium text-sm leading-5">Ikuti Kami</div>
          <div className="gap-2 flex flex-row">
            {medsos.map((value) => (
              <div key={value.id}>
                <img src={value.imgsrc} alt={value.Name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
