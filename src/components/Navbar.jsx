'use client'
import navItem, { navSocial } from '@/data/navItem'
import { motion } from 'framer-motion'
import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiMenuAlt1, HiX } from 'react-icons/hi'

const playfair_Display = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function Navbar() {
  const [y, setY] = useState(0)
  const [show, setShow] = useState(0)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setY(window.scrollY)
    })
    setActiveHash(window.location.hash)
  }, [])

  return (
    <>
      <nav
        className={`w-full max-w-6xl h-[75px] px-4 py-5 flex justify-center items-center rounded-b-lg ${
          y > 60 ? 'fixed z-50 bg-[#fafafa] shadow-lg' : ''
        }`}
      >
        {/* only on desktop menu */}
        <ul className="hidden sm:flex gap-3 items-center mr-auto">
          {navItem.map((nav, index) => (
            <motion.li
              key={index}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: eval('0.' + index) }}
            >
              <a
                onClick={() => setActiveHash(nav.href)}
                href={nav.href}
                className={`text-dark text-sm ${
                  activeHash == nav.href || !activeHash && index == 0 ? 'nav-active font-semibold' : ''
                }`}
              >
                {nav.title}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* hamburger */}
        <motion.button
          animate={{ rotate: show ? 90 : 0 }}
          onClick={() => setShow((prev) => !prev)}
          className="text-4xl p-1 sm:hidden"
          aria-label='hamburger menu'
        >
          {show ? <HiX aria-label='close menu' /> : <HiMenuAlt1 aria-label='show menu' />}
        </motion.button>
        {/* only on mobile menu */}
        <motion.ul
          animate={{ scale: show ? 1 : 0 }}
          className=" bg-[#fafafa] flex sm:hidden gap-3 justify-center items-center mr-auto p-5 rounded-lg shadow-lg fixed z-20 top-[80px] w-[90%] max-w-[500px]"
        >
          {navItem.map((nav, index) => (
            <motion.li
              key={index}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: eval('0.' + index) }}
            >
              <a
                onClick={() => setActiveHash(nav.href)}
                href={nav.href}
                className={`text-dark text-sm ${
                  activeHash == nav.href || !activeHash && index == 0 ? 'nav-active font-semibold' : ''
                }`}
              >
                {nav.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.h1
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          className={`${playfair_Display.className} mx-auto text-dark font-bold`}
        >
          Dream Agency
        </motion.h1>

        <ul className="flex items-center gap-4 ml-auto">
          {navSocial.map((nav, index) => (
            <motion.li
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: eval('0.' + index) }}
              key={index}
              className="border-2 border-dark fancy-border-radius p-2"
            >
              <Link href={nav.href} target="_blank" aria-label={`Go to my ${nav.href} page`}>
                {nav.icon}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      {y > 60 && <div className="h-[75px]"></div>}
    </>
  )
}

export default Navbar
