import type { Metadata } from 'next'
import { Open_Sans, Pacifico } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/context/AuthContext'

const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})
const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'WorkStellar',
  description: 'Transform Ideas into Digital Excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.variable} ${pacifico.variable} font-open-sans`}
      >
        <AuthProvider>
          <div>
            <main className="px-8 md:px-16 lg:px-20 xl:px-24 min-[1920px]:px-80">
              <Navbar />
              {children}
            </main>
            <Footer />
            <Toaster
              position="bottom-center"
              reverseOrder={false}
              toastOptions={{ duration: 3000 }}
            />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
