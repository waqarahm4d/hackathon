import Header from '@/components/layout/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hackathon Ecom',
  description: 'Developed By Waqar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-xl px-2 m-auto">
         <Header />
        </div>
        {children}
        <div className="max-w-screen-xl px-2 m-auto">
         <Footer />
        </div>
      </body>
    </html>
  )
}
