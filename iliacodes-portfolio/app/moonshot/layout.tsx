
export const metadata = {
  title: 'MoonShot',
  description: 'MoonShot is a asset tracking app that allows users to follow their favorite Stocks, Crptocurrencies and NFTs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
