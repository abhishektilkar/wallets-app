import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
       {/* Main Content */}
       <main className="mt-20 md:mt-36">
        {/* Hero Section */}
        <section className="bg-black py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-purple-blue ">Manage Your Wallet with Ease</h1>
            <p className="mt-4 text-lg md:text-xl text-gradient-green-blue1 ">
              A simple, secure, and convenient way to keep track of your finances.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href='/addwallet'>
                <Button className="px-6 py-3 text-sm md:text-base bg-green-400 text-black hover:bg-green-500">
                  Get Started
                </Button>
              </Link>
              <Button className="px-6 py-3 text-sm md:text-base border border-green-400 text-green-400 hover:bg-green-500 hover:text-black">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v12m0 6v-6m-9 9h18a2 2 0 002-2v-2a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              <h2 className="mt-4 text-xl font-semibold text-green-500">Secure</h2>
              <p className="mt-2 text-green-200">
                Your data is protected with industry-leading security measures.
              </p>
            </div>
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18M4 7h16M5 11h14M6 15h12M7 19h10"
                />
              </svg>
              <h2 className="mt-4 text-xl font-semibold text-purple-500">Simple</h2>
              <p className="mt-2 text-purple-200">Easy-to-use interface with all the features you need.</p>
            </div>
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m-7-3a4 4 0 1111-4m-1.2 4.8a4.2 4.2 0 10-6 0"
                />
              </svg>
              <h2 className="mt-4 text-xl font-semibold text-blue-500">Convenient</h2>
              <p className="mt-2 hover:text-gray-200 text-blue-200">Access your wallet from anywhere, at any time.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-purple-700 to-blue-900 py-16 md:py-24 text-slate-300/90 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Start Managing Your Wallet Today</h2>
            <p className="mt-4 text-lg md:text-xl">
              Join thousands of users who trust our app to keep their finances in check.
            </p>
            <div className="mt-8">
              <Button className="px-8 py-3 text-sm md:text-base bg-yellow-400 text-black hover:bg-yellow-500">
                Start Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage
