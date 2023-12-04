import Image from 'next/image'
import React from 'react'
import hero_image from '@/assets/images/hero_image.png'
import orange_hero_decor_2 from '@/assets/images/orange_hero_decor_2.svg'
import orange_hero_decor from '@/assets/images/orange_hero_decor.svg'
import dotted from '@/assets/images/dotted.png'

function HeroSection() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center mt-5 px-5">
      <div className="basis-1/2 max-w-[490px] flex flex-col gap-y-3 justify-start items-start">
        <h1 className={`text-6xl font-extralight text-dark hero-heading`}>
          <span className="font-bold">
            We Help You <br />
          </span>
          to grow your <br /> Bussines
        </h1>
        <p className="text-sm text-dark">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button className="text-white text-sm py-3 px-6 font-semibold bg-dark rounded-md">
          GET STARTED
        </button>
      </div>
      {/* decoration top right */}
      <Image
        width={350}
        height={350}
        src={orange_hero_decor}
        alt="hero image decoration"
        className="absolute -z-[1] right-0 top-0"
      />
      <div className="basis-1/2 min-w-[355px] relative flex">
        {/* decoration */}
        <Image
          width={280}
          height={350}
          src={dotted}
          alt="hero image decoration"
          className="absolute z-[2] left-[20%]"
        />
        <Image
          width={280}
          height={350}
          src={orange_hero_decor_2}
          alt="hero image decoration"
          className="absolute z-[3] left-[30%] -top-10"
        />

        <Image
          width={400}
          height={350}
          src={hero_image}
          alt="hero image"
          className="relative z-[4] m-auto"
        />
      </div>
    </div>
  )
}

export default HeroSection
