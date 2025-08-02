import { Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/footer/Footer";
import { Toaster } from "react-hot-toast";
import Marquee from "@/components/shared/Marquee";
import FatWaWrapper from "@/components/shared/FatWaWrapper";
import Script from "next/script";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], // choose the weights you need
  variable: "--font-merriweather", // optional: for CSS variable
  display: "swap",
});

export const metadata = {
  title: "Osaka Masjid",
  description: "Osaka Masjid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${merriweather.variable} font-merriweather antialiased`}
      >
         <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
      <Script src="/assets/translation.js" strategy="beforeInteractive" />
      <Script src="//translate.google.com/translate_a/element.js?cb=TranslateInit" strategy="afterInteractive" />
        
        <div>
          <Marquee />
          <FatWaWrapper/>
          {children}
          <Footer />
          <Toaster position="top-right" />
        </div>
        {/* </PayPalScriptProvider> */}
      </body>
    </html>
  );
}
