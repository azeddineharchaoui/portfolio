import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Azeddine Harchaoui Portfolio',
  description: 'This is the portfolio of Azeddine Harchaoui',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
