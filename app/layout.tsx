import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script } from "next/font/google"
import "./globals.css"

const dancingScript = Dancing_Script({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Para Meu Amor ❤️",
  description: "Uma surpresa especial para a pessoa mais importante da minha vida",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={dancingScript.className}>{children}</body>
    </html>
  )
}

