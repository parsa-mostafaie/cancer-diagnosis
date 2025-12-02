import type React from "react"
import type { Metadata, Viewport } from "next"
import { Vazirmatn } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SwRegister from "./sw-register"

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "تشخیص سرطان با هوش مصنوعی",
  description: "سیستم پیشرفته تشخیص سرطان با استفاده از هوش مصنوعی",
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <SwRegister />
      </body>
    </html>
  )
}
