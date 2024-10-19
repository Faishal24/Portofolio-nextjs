import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { GoogleTagManager } from "@next/third-parties/google";

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
