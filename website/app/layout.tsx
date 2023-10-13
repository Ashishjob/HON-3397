import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NormalNavbar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HON-3397 Website',
  description: 'Environmental Data, Policy, & Justice Data Visualization Website',
  openGraph: {
    images: './metaImage.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><div className='bg-primary opacity-100'><NormalNavbar/></div>{children}</body>
    </html>
  )
}
