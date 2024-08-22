import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white/5 py-8 text-black text-center border-t border-white/20">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Wallet App. All rights reserved.</p>
          <div className="mt-4">
            <Link href="#" className="text-black/70 hover:text-white transition">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="#" className="text-black/70 hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
