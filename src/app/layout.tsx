import type { Metadata } from 'next'
import '../styles/index.css'
import { ThemeProvider } from './components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Elegance',
  description: 'Elegant jewelry website built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Added overflow-x-hidden here to prevent horizontal scroll */}
      <body className="overflow-x-hidden w-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}