import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suraj Mali - Java Backend Engineer",
  description:
    "Portfolio of Suraj Mali, a passionate Java backend engineer specializing in Spring Boot, microservices, and AI integrations.",
  keywords: "Java developer, Spring Boot, backend engineer, microservices, REST APIs, portfolio",
  authors: [{ name: "Suraj Mali" }],
  creator: "Suraj Mali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://surajmali.dev",
    title: "Suraj Mali - Java Backend Engineer",
    description: "Portfolio of Suraj Mali, a passionate Java backend engineer.",
    siteName: "Suraj Mali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Mali - Java Backend Engineer",
    description: "Portfolio of Suraj Mali, a passionate Java backend engineer.",
    creator: "@surajmali",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
