import '../styles/globals.css'
import {ubuntuMono} from '../utils/fonts'

export const metadata = {
  title: 'IliaCodes',
  description: 'IliaCodes Portfolio, Vancouver based Blockchain developer and auditor.',
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
