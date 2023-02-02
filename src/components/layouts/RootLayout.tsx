import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'

type Props = {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <div className="relative  transition">
      <Header />
      <div className="p-5 md:px-[10vmin] text-gray-800  dark:text-white dark:bg-gray-800 min-h-content-body">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout