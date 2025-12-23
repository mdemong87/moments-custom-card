import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Header from "./componnent/Header";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});






//local font is here
const Brunson = localFont({
  src: [
    {
      path: "../public/font/Brunson.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Brunson",
});

const GustanBlack = localFont({
  src: [
    {
      path: "../public/font/GustanBlack.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-GustanBlack",
});

const AileronRegular = localFont({
  src: [
    {
      path: "../public/font/Aileron-Regular.otf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-AileronRegular",
});



const AileronSemiBold = localFont({
  src: [
    {
      path: "../public/font/Aileron-SemiBold.otf",
      weight: "500",
      style: "semibold",
    },
  ],
  variable: "--font-AileronSemiBold",
});



const AileronBold = localFont({
  src: [
    {
      path: "../public/font/Aileron-Bold.otf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-AileronBold",
});

const AileronHeavy = localFont({
  src: [
    {
      path: "../public/font/Aileron-Heavy.otf",
      weight: "900",
      style: "heavy",
    },
  ],
  variable: "--font-AileronHeavy",
});





export const metadata = {
  title: "Momento Cards - Customize Your Own Cards",
  description: "Design your own custom cards with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} ${Brunson.variable} ${GustanBlack.variable} ${AileronRegular.variable} ${AileronSemiBold.variable} ${AileronBold.variable} ${AileronHeavy.variable} antialiased`}
      >
        <Header />
        <div className="pt-[75px] bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
