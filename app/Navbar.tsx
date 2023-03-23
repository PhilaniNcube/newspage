/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const links = [
  "Home",
  "New",
  "Popular",
  "Trending",
  "Categories"
]


const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <img src="/images/logo.svg" className="w-20 object-cover" alt="logo" />

        <ul className="hidden lg:flex items-center space-x-4">
          {links.map(link => <Link href="/" key={link} className="text-gray-blue text-xl hover:text-soft-orange">{link}</Link>)}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
