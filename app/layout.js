import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const space = Space_Grotesk({
  preload: false,
});

export const metadata = {
  title: 'Zingify Coming Soon',
  description: 'Get ready for a new AI-powered restaurant recommendation experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  )
}
