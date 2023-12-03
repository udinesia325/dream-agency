import navItem, { navSocial } from '@/data/navItem'
import Link from 'next/link'
import React from 'react'
import { Playfair_Display } from 'next/font/google'

const playfair_Display = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function Navbar() {
  return (
    <div className="w-full px-4 py-5 flex justify-center items-center">
      <ul className="flex gap-3 items-center mr-auto">
        {navItem.map((nav, index) => (
          <li key={index}>
            <Link
              href={nav.href}
              className={`text-dark text-sm ${index == 0 ? 'nav-active' : ''}`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <h1
        className={`${playfair_Display.className} mx-auto text-dark font-bold`}
      >
        Dream Agency
      </h1>

      <ul className="flex items-center gap-4 ml-auto">
        {navSocial.map((nav, index) => (
          <li
            key={index}
            className="border-2 border-dark fancy-border-radius p-2"
          >
            <Link href={nav.href}>{nav.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
