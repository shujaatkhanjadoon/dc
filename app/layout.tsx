import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat Appliction',
  description: 'Discord clone with NextJs and Tailwindcss - Shujaat Khan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
