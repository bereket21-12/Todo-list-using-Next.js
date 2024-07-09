import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Todo List",
  description: "It is a Todo List app using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className }>
         <NavBar/> 
        { children }</body>
      <Footer/>
    </html>
  );
}
