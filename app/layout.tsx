import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/owncomponnets/Header/Header";
import Footer from "@/owncomponnets/footer/Footer";
// import { SmoothScroll } from "@/owncomponnets/Locomotive";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sampoorna",
  description: "Sampoorna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 antialiased`}>


        <Header />


        <main className="pt-30">
          {children}
        </main>


        <Footer />
      </body>
    </html>
  );
}
