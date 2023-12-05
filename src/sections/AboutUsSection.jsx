'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import dotted from '@/assets/images/dotted.png'
import orange_hero_decor_2 from '@/assets/images/orange_hero_decor_2.svg'
import family from '@/assets/images/family.png'
import OurRecentWorkSection from './OurRecentWorkSection'
import { animate, inView, motion } from 'framer-motion'

function AboutUsSection() {
  const dottedRef = useRef(null)
  const decorRef = useRef(null)

  useEffect(() => {
    inView(dottedRef.current, ({ target }) => {
      animate(
        target,
        { x: [0, 10] },
        { duration: 3, repeat: Infinity, repeatType: 'reverse' }
      )
      inView(decorRef.current, ({ target }) => {
        animate(
          target,
          { scale: [0.95, 0.95, 0.95, 1] },
          { duration: 5, repeat: Infinity, repeatType: 'reverse' }
        )
      })
    })
  }, [])
  return (
    <>
      <div className="h-32" id="about-us"></div>
      <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start relative">
        {/* image */}
        <div className="basis-1/2 min-w-[400px] min-h-[400px]  relative">
          <Image
            src={dotted}
            ref={dottedRef}
            width={350}
            height={300}
            alt="dotted image"
            className="absolute z-[1] w-[300px] sm:w-[350px] left-10 top-10"
          />
          <Image
            src={orange_hero_decor_2}
            ref={decorRef}
            width={300}
            height={300}
            alt="dotted orange image"
            className="absolute z-[2] w-[65%] max-w-[300px] -rotate-45 left-10 top-0"
          />
          <Image
            src={family}
            width={400}
            height={400}
            alt="hero image"
            className="absolute z-[3] w-[90%] max-w-[400px] top-6 left-1 right-1 sm:left-10"
          />
        </div>
        <div className="basis-1/2 flex items-center sm:items-start flex-col gap-y-4 text-dark relative z-[1] pt-10 px-3">
          <motion.h1
            className="font-thin text-4xl about-heading"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once:true }}
          >
            <span className="font-bold">About Us</span>
            <br /> Fake or Real
          </motion.h1>
          <motion.p
            className="text-sm font-thin"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once:true }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </motion.p>
          <motion.p
            className="text-sm font-thin"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once:true }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </motion.p>
          <motion.button
            className="mt-4 uppercase text-white bg-dark py-2 px-6 font-semibold rounded-md"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once:true }}
          >
            Explore More
          </motion.button>
        </div>

        {/* decorator */}
        <div className="bg-orange-light-2/50 w-full h-[500px] sm:h-[400px] rounded-tl-full absolute -z-[1]  top-64 left-0 sm:-left-36"></div>
      </div>
      <OurRecentWorkSection />
    </>
  )
}

export default AboutUsSection
