import React from 'react';
import './globals.css';
import { Inter, Roboto } from 'next/font/google';
import Head from 'next/head';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Corey Samuels' Portfolio",
  description: 'The portfolio of Corey Samuels',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="w-full max-w-full">
      <Head>
        <link href={'https://fonts.cdnfonts.com/css/magz'} rel="stylesheet" />
      </Head>
      <body className={`${roboto.className} ${inter.className} w-full`}>
        <main className="text-zinc-100 bg-zinc-900 body-font w-full">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
