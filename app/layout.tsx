import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Anonymous_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TranslationProvider } from "@/components/i18n/translation-provider"
import "./globals.css"

const anonymous = Anonymous_Pro({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-anon" })

export const metadata: Metadata = {
  title: "Navi R3 | Modular Gaming Mouse",
  description: "Open source, modular gaming mouse with custom PCB and endless customization.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${anonymous.variable} antialiased bg-background text-foreground`}
      >
        <TranslationProvider>
          {children}
        </TranslationProvider>
        <Analytics />
      </body>
    </html>
  )
}
