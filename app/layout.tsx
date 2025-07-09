import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LOTCHAN MOBILE SERVICE',
  description: 'MOBILE SERVICE AT YOUR DOORSTEP',
  generator: 'Lotchan Kumar',
  icons: {
    icon: "/logophone.jpg", // 👈 This is how you add favicon in App Router
  },
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
