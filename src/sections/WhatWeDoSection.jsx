'use client'
import WhatWeDoSlider from '@/components/WhatWeDoSlider'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import dotted from '@/assets/images/dotted.png'
import { animate, inView } from 'framer-motion'

function WhatWeDoSection() {
  const headingRef = useRef(null)

  useEffect(() => {
    inView(headingRef.current, ({ target }) => {
      animate(target, { opacity: [0, 1] }, { duration: 0.5 })
    })
  }, [])
  return (
    <>
      <div id="services" className="h-28"></div>
      <div className="relative">
        {/* decoration */}
        <div className="w-[90%] h-[400px] absolute z-[2] bg-blue-light rounded-tr-full"></div>
        <Image
          src={dotted}
          width={400}
          height={350}
          className="absolute z-[1] right-0 -bottom-20"
          alt="decoration"
        />
        <div className="relative z-[3] pt-10 flex flex-col justify-center items-center">
          <h1
            ref={headingRef}
            className="inline-block text-3xl text-center font-extralight text-dark what-we-do-heading"
          >
            <span className="font-bold">
              What We Do <br />
            </span>
            for your Business
          </h1>
          <div className="w-full">
            <WhatWeDoSlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDoSection
