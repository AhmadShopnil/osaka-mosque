import { Geist, Geist_Mono,Merriweather } from "next/font/google";
import "./globals.css";

import Footer from "@/components/common/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // choose the weights you need
  variable: '--font-merriweather', // optional: for CSS variable
  display: 'swap',
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
        <div>
         
          {children}
          <Footer/>
        </div>
     
      </body>
    </html>
  );
}
