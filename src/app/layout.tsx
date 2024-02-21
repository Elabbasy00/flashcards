import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Providers } from "./provider";
import ThemeRegistry from "../Theme/ThemeRegistry";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { Toaster } from "react-hot-toast";
import { Sheet } from "@mui/joy";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlashCards",
  description: "A Way To Learn CS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} easing="linear" />
        <Providers>
          <ThemeRegistry>
            <Suspense>
              <Toaster position="top-center" />
              <Navbar />
              <Sheet sx={{ py: 10, minHeight: "80vh" }}>{children}</Sheet>
              <Footer />
            </Suspense>
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
