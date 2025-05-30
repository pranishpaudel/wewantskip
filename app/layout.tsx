import type { Metadata } from 'next';
import { Geist, Geist_Mono, Poppins } from 'next/font/google';
import './globals.css';
import CheckoutFooter from './components/layout/CheckoutFooter';
import CheckoutNavBar from './components/layout/CheckoutNavBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'We Want Skip',
  description: 'A website for skip',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <CheckoutNavBar />
        {children}
        <CheckoutFooter />
      </body>
    </html>
  );
}
