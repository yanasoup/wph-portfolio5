import clsx from 'clsx';
import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'YanaSoup Porfolio',
  description: 'BUILDING FAST & INTERACTIVE WEB EXPERIENCES',
};

const redhatdisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-red-hat-display',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(redhatdisplay.variable, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
