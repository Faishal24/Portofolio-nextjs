import Head from "next/head";
import { baseUrl } from "./sitemap";
import Banner from "@/components/Banner";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Faishal's Portofolio",
    template: "%s | Faishal's Portofolio",
  },
  description: "Created using Next.js and Tailwind CSS",
  openGraph: {
    title: "Faishal's Portofolio",
    description: "Created using Next.js and Tailwind CS.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: { google: "UZumOKjgwFZuN5L6Y0f8urkUI_PzwlOBJm7eb2rD-tk" },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Faishal's Portofolio</title>
        <meta
          name="description"
          content="Saya memiliki keahlian dalam menciptakan antarmuka pengguna yang responsif dan menarik. Saya berpengalaman dalam menggunakan teknologi modern seperti HTML, CSS, dan JavaScript, serta framework seperti React dan Tailwind CSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="vlrtK2yO_eMOhtO0QfLtjKiVjWVchA71KwZCcF5ukck"
        />
        <meta name="keywords" content="portofolio, nextjs portofolio" />
        <meta property="og:title" content="Faishal's Portofolio" />
        <meta
          property="og:description"
          content="Saya memiliki keahlian dalam menciptakan antarmuka pengguna yang responsif dan menarik. Saya berpengalaman dalam menggunakan teknologi modern seperti HTML, CSS, dan JavaScript, serta framework seperti React dan Tailwind CSS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.faishal24.my.id/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="64x64" />
        <link rel="canonical" href="https://www.faishal24.my.id/" />
      </Head>

      <div className="bg-gray-50 dark:bg-gray-900 min-h-full">
        <Navbar />

        <div className="flex justify-center">
          <div id="body" className="w-[50em] pt-12 sm:pt-16 xl:mx-5">
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
