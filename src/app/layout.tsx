import Body from '@/components/layout/body'
import HTML from '@/components/layout/html'
import ThemeContextProvider from '@/hooks/context/useThemeContext'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio Steven Li',
  description: 'Steven Li is een Software Engineer uit Driebergen-Rijsenburg.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContextProvider>
      <HTML>
        <Body>
          {children}
        </Body>
      </HTML>
    </ThemeContextProvider>
  )
}
