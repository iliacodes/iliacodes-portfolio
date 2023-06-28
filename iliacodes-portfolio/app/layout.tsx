import './globals.css'
import { Inter } from 'next/font/google'
import {ubuntuMono} from './fonts'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntuMono.className}>{children}</body>
    </html>
  )
}
