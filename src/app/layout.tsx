import type { Metadata } from 'next';
import { Barlow, Fraunces } from 'next/font/google';
import '@/styles/globals.css';

const fraunces = Fraunces({
  variable: '--font-frauncesSerif',
  weight: ['900'],
  subsets: ['latin'],
});

const barlow = Barlow({
  variable: '--font-barlowSansSerif',
  weight: ['500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${barlow.variable} bg-surface-page antialiased`}
      >
        {/* Footer margin:  pb-18 md:pb-18 lg:pb-22*/}
        <div className="px-6 md:px-9.5 lg:px-20  max-w-[1440px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
