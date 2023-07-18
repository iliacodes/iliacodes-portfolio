import '../styles/globals.css'
import {ubuntuMono} from '../utils/fonts'

export const metadata = {
  title: 'IliaCodes',
  description: 'IliaCodes Portfolio, Vancouver based Full-Stack Developer, Blockchain developer and Smart-Contract Security Researcher.',
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
