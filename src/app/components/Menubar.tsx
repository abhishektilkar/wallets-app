'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const Appbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="py-2 border-b md:border-none fixed top-0 left-0 right-0 z-20 bg-white md:bg-white/0">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center md:border md:p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto md:bg-white/90 md:backdrop:blur-sm">
                    <Link href="/">
                        <div className="border h-12 w-12 md:h-16 md:w-16 rounded-lg inline-flex justify-center items-center p-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 md:w-8 md:h-8 m-0"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                                />
                            </svg>
                        </div>
                    </Link>
                    <button
                        className="md:hidden flex items-center justify-center h-12 w-12 border rounded-lg"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <div className="hidden md:flex gap-4 items-center">
                        <nav className="flex gap-4 md:gap-16 text-sm">
                            <Link className="text-black/70 hover:text-black transition" href="#">
                                Home
                            </Link>
                            <Link
                                className="text-black/70 hover:text-black transition"
                                href="https://github.com/abhishektilkar"
                                target="_blank"
                            >
                                About Us
                            </Link>
                        </nav>
                        <div className="flex gap-2 md:gap-4 items-center">
                            <Link className="text-black/70 hover:text-black transition" href="/addwallet">
                                <Button className="text-xs md:text-sm">Create Wallet</Button>
                            </Link>
                            <Link
                                className="text-black/70 hover:text-black transition"
                                href="/addwallet"
                            >
                                <Button className="text-xs md:text-sm">Add Wallet</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed top-2 right-2 z-30 bg-white border shadow-lg rounded-lg w-64 md:hidden">
                    <div className="flex justify-between items-center py-2 px-4 border-b">
                        <h2 className="text-lg font-semibold">Menu</h2>
                        <button
                            className="flex items-center justify-center h-8 w-8"
                            onClick={toggleMenu}
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2 p-4">
                        <Link
                            className="text-black/70 hover:text-black transition"
                            href="#"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            className="text-black/70 hover:text-black transition"
                            href="https://github.com/abhishektilkar"
                            target="_blank"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                        <Link
                            className="text-black/70 hover:text-black transition"
                            href="/addwallet"
                            onClick={toggleMenu}
                        >
                            <Button className="text-xs w-full">Create Wallet</Button>
                        </Link>
                        <Link
                            className="text-black/70 hover:text-black transition"
                            href="/addwallet"
                            onClick={toggleMenu}
                        >
                            <Button className="text-xs w-full">Add Wallet</Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Appbar
