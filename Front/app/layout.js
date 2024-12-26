"use client";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { useEffect } from "react";
import { TripProvider } from "./Context/Context";
import Navbar from "./navbar/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TripProvider>{children}</TripProvider> */}

        <TripProvider>{children}</TripProvider>
        <Toaster />
      </body>
    </html>
  );
}
