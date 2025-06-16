import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

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
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
