"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const navbarHeight = 64 
            const offsetPosition = element.offsetTop - navbarHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            })
        }
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#020817] shadow-md" : "bg-[#020817]"
                }`}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="#home" className="flex items-center"
                    onClick={() => scrollToSection("home")}
                >
                    <Image src="/img/logo.png" alt="DataBank" width={200} height={200} className="h-6 w-auto" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        href="#home"
                        className="text-white hover:text-[#38bdf8] transition-colors"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("home")
                        }}
                    >
                        Home
                    </Link>
                    <Link 
                        href="#features" 
                        className="text-white hover:text-[#38bdf8] transition-colors"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("features")
                          }}
                        >
                        Features
                    </Link>
                    <Link 
                        href="#how-it-works" 
                        className="text-white hover:text-[#38bdf8] transition-colors"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("how-it-works")
                          }}
                        >
                        How it Works
                    </Link>
                    <Link 
                        href="#faq" 
                        className="text-white hover:text-[#38bdf8] transition-colors"
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("faq")
                          }}
                        >
                        FAQ
                    </Link>
                    <Link 
                        href="#about-us" 
                        className="text-white hover:text-[#38bdf8] transition-colors
                        "
                        onClick={(e) => {
                            e.preventDefault()
                            scrollToSection("about-us")
                          }}
                        >
                        About Us
                    </Link>
                </nav>

                {/* Connect Wallet Button */}
                <div className="hidden md:block">
                    <Button
                        variant="default"
                        className="h-9 text-sm font-medium bg-[#2B9DDA] hover:bg-[#2589c2] truncate rounded-full"
                    >
                        Connect wallet
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-[#020817] text-white border-[#1e293b]">
                        <div className="flex flex-col space-y-6 mt-8">
                            <Link 
                                href="#home" 
                                className="text-lg font-medium hover:text-[#38bdf8] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection("home")
                                }}
                                >
                                Home
                            </Link>
                            <Link 
                                href="#features" 
                                className="text-lg font-medium hover:text-[#38bdf8] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection("features")
                                }}
                                >
                                Features
                            </Link>
                            <Link 
                                href="#how-it-works" 
                                className="text-lg font-medium hover:text-[#38bdf8] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection("how-it-works")
                                }}
                                >
                                How it Works
                            </Link>
                            <Link href="/faq" className="text-lg font-medium hover:text-[#38bdf8] transition-colors">
                                FAQ
                            </Link>
                            <Link 
                                href="#about-us" 
                                className="text-lg font-medium hover:text-[#38bdf8] transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection("about-us")
                                }}
                                >
                                About Us
                            </Link>
                            <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white w-full mt-4">Connect wallet</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

