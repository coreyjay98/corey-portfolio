import React from "react";
import "./globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Corey Samuels' Portfolio",
  description: "The portfolio of Corey Samuels",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/magz" rel="stylesheet" />
      </Head>
      <body className={roboto.className}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
