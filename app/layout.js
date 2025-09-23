import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./componnent/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Custom team Card Designer",
  description: "Design your own custom cards with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <div className="pt-[75px] bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
