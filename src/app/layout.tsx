export const metadata = {
  title: 'AppBay E-Commerce Store',
  description: 'By HZJ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
