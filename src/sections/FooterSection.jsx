'use client'
import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import map from '@/assets/images/map.png'
import { motion } from 'framer-motion'

const playfair_Display = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})

function FooterSection() {
  return (
    <div
      id="contact-us"
      className="bg-black w-full rounded-tr-2xl sm:rounded-tr-full flex flex-col flex-wrap sm:flex-row sm:flex-nowrap justify-between items-center gap-y-10 sm:gap-1 text-white mt-8 p-8"
    >
      <div className="basis-1/2">
        <motion.h1
          className={`${playfair_Display.className} text-3xl`}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          Dream Agency
        </motion.h1>
        <motion.p
          className="text-sm leading-snug mt-5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.
        </motion.p>
        <motion.h1
          className="font-semibold mt-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          GET IN TOUCH
        </motion.h1>

        <motion.div
          className="mt-8 flex p-0 gap-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            className="bg-transparent px-3 text-white ring-white border border-white outline-none placeholder:text-white"
          />
          <button className="bg-white text-black py-2 px-8 font-semibold">
            SEND
          </button>
        </motion.div>
      </div>
      <div className="basis-1/2 flex">
        <Image
          src={map}
          width={350}
          height={350}
          className="aspect-video w-[350px] mx-auto sm:mx-0 mt-auto"
          alt="map"
        />
      </div>
    </div>
  )
}

export default FooterSection
