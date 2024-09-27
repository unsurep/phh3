import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Port Harcourt Hash House Harriers",
  description: "A running group that drinks beer to save water",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        
        </body>
    </html>
  );
}
