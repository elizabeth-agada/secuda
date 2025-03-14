import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

export const metadata: Metadata = {
  title: "DataBank Dashboard",
  description:
    "DataBank is a decentralized document storage system built on the blockchain, leveraging Non-Fungible Token (NFT) technology to represent and protect user documents.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#040E24] text-white">
        <div className="flex flex-col min-h-screen">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="flex flex-1 pt-16 overflow-y-auto">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

