import type { Metadata } from "next";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import "./globals.css";

export const metadata: Metadata = {
  title: "SD FASHION | Style • Elegance • You",
  description:
    "Discover timeless Pakistani and Indian-inspired fashion with SD FASHION.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}

