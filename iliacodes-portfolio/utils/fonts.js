import { Inter, Ubuntu_Mono } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const ubuntuMono = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-ubuntu-mono"
});