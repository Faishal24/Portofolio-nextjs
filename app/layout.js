import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import { baseUrl } from "./sitemap";

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
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WKDWF8GV" />
      
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
