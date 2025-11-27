import Footer from '@/containers/footer/footer'
import './globals.css'
import Navbar from '@/containers/navbar/navbar'
import { Poppins } from 'next/font/google'
import ScrollUp from '@/containers/scroll-up/scroll-up'

export const metadata = {
  title: 'Portfolio',
  description: '',
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className='dark'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={'min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 scroll-smooth antialiased ' + poppins.className}>
        {children}
      </body>
    </html>
  )
}
