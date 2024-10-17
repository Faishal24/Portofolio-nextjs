import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-full">
      <Navbar />

      <div className="flex justify-center">
        <div id="body" className="w-[45em] pt-14 sm:pt-16 xl:mx-5">
          <Banner />
          <Hero />
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}
