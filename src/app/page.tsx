import { Navbar } from "@/components/Navbar/StatusBar";
import "./globals.css";
import { Categories } from "@/components/Categories/Categories";
import { TopUpAndBill } from "@/components/TopUpSection/TopUpSection";
import { Banner } from "@/components/Banner/Banner";
import { Flashsale } from "@/components/Flashsale/FlashSale";
import { Recommen } from "@/components/Recommen/Recomen";
import { Footer } from "@/components/Footer/Footer";
import Carousel from "@/components/Hero/Carousel";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[#F9F9F9] max-w-screen-xl md:m-auto flex flex-col gap-10">
        <Carousel />
        <Categories />
        <TopUpAndBill />
        <Banner />
        <Flashsale />
        <Recommen />
      </div>
      <Footer />
    </main>
  );
}
