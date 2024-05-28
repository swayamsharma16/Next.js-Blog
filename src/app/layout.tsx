import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swayam's Blog",
  description: "Swayam's Blog made with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const header = (
    
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <Link href={'/'}>  <h1 className="text-white font-bold">Swayams Blog</h1></Link>
        <h1 className="text-slate-300">Welcome to my tech blog</h1>
      </div>
    </header>
  )


  const footer = (
    
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400  ">
        <h3>Developed by Swayam</h3>
      </div>
    </footer>
  )




  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto px-6   max-w-2xl">

        {header}

        {children}
        {footer}
        </div>
        </body>
    </html>
  );
}


