import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Balbir Singh Thapa - Full-Stack MERN Developer",
  description: "Portfolio of Balbir Singh Thapa, a passionate Full-Stack MERN Developer and Backend Specialist",
  keywords: "MERN, Full-Stack Developer, React, Node.js, MongoDB, Express.js, Portfolio",
  authors: [{ name: "Balbir Singh Thapa" }],
  openGraph: {
    title: "Balbir Singh Thapa - Full-Stack MERN Developer",
    description: "Portfolio of Balbir Singh Thapa, a passionate Full-Stack MERN Developer and Backend Specialist",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
