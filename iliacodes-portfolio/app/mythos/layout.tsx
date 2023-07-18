
export const metadata = {
  title: 'Mythos',
  description: 'Mythos is a browser based game built in unity. Users can battle NPCs, other users and earn rewards completing quests in the galaxies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
