'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import hero_image from '@/assets/images/hero_image.webp'
import orange_hero_decor_2 from '@/assets/images/orange_hero_decor_2.svg'
import orange_hero_decor from '@/assets/images/orange_hero_decor.svg'
import dotted from '@/assets/images/dotted.png'
import { animate, motion } from 'framer-motion'

function HeroSection() {
  const decorationTopRightRef = useRef()
  const decorationHeroRef = useRef()
  const heroImageRef = useRef()
  const dottedRef = useRef()

  useEffect(() => {
    animate(decorationTopRightRef.current, { x: [100, 0] }, { duration: 0.5 })
    animate(decorationHeroRef.current, { scale: [0, 1] })
    animate(heroImageRef.current, { scale: [0, 1.2, 1] }, { duration: 0.6 })
  }, [])

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-y-10 justify-between items-center mt-5 px-5">
      <div className="basis-1/2 max-w-[490px] flex flex-col gap-y-3 justify-start items-start">
        <motion.h1
          className={`text-6xl font-extralight text-dark hero-heading`}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-bold">
            We Help You <br />
          </span>
          to grow your <br /> Bussines
        </motion.h1>
        <motion.p
          className="text-sm text-dark"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </motion.p>
        <motion.button
          className="text-white text-sm py-3 px-6 font-semibold bg-dark rounded-md"
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{ delay: 1 }}
        >
          GET STARTED
        </motion.button>
      </div>
      {/* decoration top right */}
      <Image
        width={350}
        height={350}
        ref={decorationTopRightRef}
        src={orange_hero_decor}
        alt="hero image decoration"
        className="absolute -z-[1] right-0 top-0"
      />
      <div className="basis-1/2 min-w-[355px] relative flex">
        {/* decoration */}
        <Image
          width={280}
          height={350}
          ref={dottedRef}
          src={dotted}
          alt="hero image decoration"
          className="absolute z-[2] left-[20%]"
        />
        <Image
          width={280}
          height={350}
          ref={decorationHeroRef}
          src={orange_hero_decor_2}
          alt="hero image decoration"
          className="absolute z-[3] left-10 w-[250px] sm:left-[30%] -top-10"
        />

        <Image
          width={400}
          height={350}
          ref={heroImageRef}
          src={hero_image}
          loading='eager'
          alt="hero image"
          className="relative z-[4] m-auto"
        />
      </div>
    </div>
  )
}

export default HeroSection
