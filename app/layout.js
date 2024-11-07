import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { GoogleTagManager } from "@next/third-parties/google";
// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <GoogleTagManager gtmId="GTM-WKDWF8GV" />
      
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="colored"
          stacked
        />
      </body>
    </html>
  );
}
