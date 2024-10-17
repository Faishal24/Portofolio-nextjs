import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Faishal's Portofolio</title>
        <meta name="description" content="Created using Next.js and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </>
  );
}
