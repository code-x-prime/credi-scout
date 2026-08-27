import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { SiteReveal, WhatsAppButton } from '@/components/site'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
export const metadata: Metadata = { title: 'CrediScout | Banking Verification & Field Investigation', description: 'Technology-enabled banking verification and field investigation for banks, NBFCs and financial institutions.', generator: 'CrediScout', metadataBase: new URL('https://crediscout.com'), openGraph: { title: 'CrediScout | Banking Verification & Field Investigation', description: 'Verification infrastructure for better risk decisions.', type: 'website' } }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f6f7f3' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={manrope.variable}><body className="antialiased">{children}<SiteReveal/><WhatsAppButton/>{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html>}
