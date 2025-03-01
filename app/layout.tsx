import type { Metadata } from "next";
import "./globals.css";
import Header from "@/owncomponnets/Header/Header";
import Footer from "@/owncomponnets/footer/Footer";
// import { SmoothScroll } from "@/owncomponnets/Locomotive";



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
      <body className={` bg-slate-900 antialiased`}>
        <Header />
        <main className="pt-30">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
