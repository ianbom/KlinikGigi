import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental Clinic - Senyum Sehat, Hidup Bahagia",
  description: "Dapatkan perawatan gigi profesional dengan dokter ahli. Proses booking yang mudah melalui WhatsApp dan sistem pembayaran yang aman.",
  icons: {
    icon: "/favicon.ico", // Assuming default or updated later
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} bg-background-light text-text-light font-display antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
