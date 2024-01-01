import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'UI Library',
  description: 'Created by DM Family Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark'>
        {children}
      </body>
    </html>
  )
}
