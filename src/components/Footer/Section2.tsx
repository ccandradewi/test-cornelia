export const Section2 = () => {
  const MetodePembayaran = [
    { id: 1, imgsrc: "/Metode/Badges.png", Name: "BCA" },
    { id: 2, imgsrc: "/Metode/Badges (1).png", Name: "MANDIRI" },
    { id: 3, imgsrc: "/Metode/Badges (2).png", Name: "BRI" },
    { id: 4, imgsrc: "/Metode/Badges (3).png", Name: "BNI" },
    { id: 5, imgsrc: "/Metode/Badges (4).png", Name: "GOPAY" },
    { id: 6, imgsrc: "/Metode/Badges (5).png", Name: "DANA" },
    { id: 7, imgsrc: "/Metode/Badges (6).png", Name: "ALFA" },
    { id: 8, imgsrc: "/Metode/Badges (7).png", Name: "VISA" },
    { id: 9, imgsrc: "/Metode/Badges (8).png", Name: "MASTERCARD" },
  ];
  const jasa = [
    { id: 1, imgsrc: "/Jasa/j1.png", Name: "JNE" },
    { id: 2, imgsrc: "/Jasa/j2.png", Name: "SICEPAT" },
    { id: 3, imgsrc: "/Jasa/j3.png", Name: "J&T" },
    { id: 4, imgsrc: "/Jasa/j4.png", Name: "GOSEND" },
    { id: 5, imgsrc: "/Jasa/j5.png", Name: "GRABSEND" },
  ];
  const keamanan = [
    { id: 1, imgsrc: "/Keamanan/k1.png", Name: "ISO" },
    { id: 2, imgsrc: "/Keamanan/k2.png", Name: "VISA" },
  ];
  return (
    <>
      <div className="container mx-auto py-4 gap-4 flex flex-col">
        <div className="flex flex-col gap-2">
          <div className="font-medium text-base leading-6">
            Metode Pembayaran
          </div>
          <div className="grid grid-cols-4 md:flex md:flex-row">
            {MetodePembayaran.map((metode) => (
              <div className="px-1 py-2" key={metode.id}>
                <img src={metode.imgsrc} alt={metode.Name} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium text-base leading-6">Jasa Pengiriman</div>
          <div className="grid grid-cols-4 md:flex md:flex-row">
            {jasa.map((jasa) => (
              <div className="px-1 py-2" key={jasa.id}>
                <img src={jasa.imgsrc} alt={jasa.Name} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-medium text-base leading-6">
            Keamanan dan Privasi{" "}
          </div>
          <div className="grid grid-cols-4 md:flex md:flex-row">
            {keamanan.map((value) => (
              <div className="px-1 py-2" key={value.id}>
                <img src={value.imgsrc} alt={value.Name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
