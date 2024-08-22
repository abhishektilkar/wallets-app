'use client'

import Link from 'next/link'

import { Menu, UserRound } from 'lucide-react'
import {
  DropdownMenu
} from '@/components/ui/dropdown-menu'
import UserImage from '@/app/components/UserImage'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaWallet } from 'react-icons/fa6'
import { useWallet } from '@solana/wallet-adapter-react'
import { Button } from '@/components/ui/button'
// import { 
const logo = '../../../public/wallet-svgrepo-com.svg'
const dropDownData = [
  {
    name: 'Profile',
    icon: <UserRound size={15} />,
    href: '/profile',
  },
]

const Appbar = () => {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const { connected } = useWallet();
  const imageUrl = '';
  useEffect(() => {
    if (connected) {
      router.push('/wallet-adapter')
    }
    if (!connected) {
      router.push('/')
    }
    setIsMounted(true)
  }, [connected, router])

  // Prevent rendering until component is mounted
  if (!isMounted) return null

  return (
    <header className="py-2 border-b md:border-none fixed top-0 left-0 right-0 z-10 bg-white md:bg-white/0">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center md:border md:p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto md:bg-white/90 md:backdrop:blur-sm">
      <div className="ml-2 mr-4 md:ml-5 md:mr-32">
        <div className="border h-12 w-12 md:h-16 md:w-16 rounded-lg inline-flex justify-center items-center p-0">
          <Link href="/">
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
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <nav className="flex gap-4 md:gap-16 text-sm">
          <Link className="text-black/70 hover:text-black transition" href="#">
            Home
          </Link>
          <Link
            className="text-black/70 hover:text-black transition"
            href="https://github.com/abhishektilkar"
            target='_blank'
          >
            About Us
          </Link>
        </nav>
      </div>
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
</header>

  )
}

export default Appbar