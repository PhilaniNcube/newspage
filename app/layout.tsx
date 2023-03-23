import Navbar from './Navbar';
import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
   weight: ["400", "700", "800"],
   subsets: ['latin']
});

export const metadata = {
  title: 'NewsRoom',
  description: 'News App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}
