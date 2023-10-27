import React from 'react';

import { Outfit, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';

import './globals.scss';

const mainFont = Outfit({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});

const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export const metadata = {
  title: 'XO - A Tic Tac Toe Game',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={clsx(mainFont.variable, monoFont.variable)}>
      <body>{children}</body>
    </html>
  );
}
