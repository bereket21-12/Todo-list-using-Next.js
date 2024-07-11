import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

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
      <body className="bg-gradient-to-br from-slate-800 to-white">
        <Provider>
         <NavBar/> 
        { children }

        </Provider>
      
        </body>
    </html>
  );
}
