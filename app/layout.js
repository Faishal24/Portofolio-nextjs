import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export const metadata = {
  title: "Faishal's Portofolio",
  description: "Created using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}