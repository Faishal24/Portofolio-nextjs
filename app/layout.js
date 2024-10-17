import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Script from "next/script";

export const metadata = {
  title: "Faishal's Portofolio",
  description: "Created using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WKDWF8GV');`}
        </Script>

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-sans antialiased">

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKDWF8GV"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
