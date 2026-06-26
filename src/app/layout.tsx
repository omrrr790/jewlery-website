import type { Metadata } from 'next'
import '../styles/index.css'
import { ThemeProvider } from './components/ThemeProvider'
import { CartProvider } from "../context/CartContext"

export const metadata: Metadata = {
  title: 'Elegance',
  description: 'Elegant jewelry website built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden w-full">
        {/* Nesting Providers: CartProvider wraps everything inside ThemeProvider */}
        <ThemeProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}