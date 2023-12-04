import Image from 'next/image'
import React from 'react'
import dotted from '@/assets/images/dotted.png'
import orange_hero_decor_2 from '@/assets/images/orange_hero_decor_2.svg'
import family from '@/assets/images/family.png'
import OurRecentWorkSection from './OurRecentWorkSection'

function AboutUsSection() {
  return (
    <>
      <div className="h-32" id="about-us"></div>
      <div className="flex flex-col flex-wrap sm:flex-row justify-between items-start relative">
        {/* image */}
        <div className="basis-1/2 min-w-[400px] min-h-[400px]  relative">
          <Image
            src={dotted}
            width={350}
            height={300}
            alt="dotted image"
            className="absolute z-[1] left-10 top-10"
          />
          <Image
            src={orange_hero_decor_2}
            width={300}
            height={300}
            alt="dotted orange image"
            className="absolute z-[2] -rotate-45 left-10 top-0"
          />
          <Image
            src={family}
            width={400}
            height={400}
            alt="hero image"
            className="absolute z-[3] top-6 left-10"
          />
        </div>
        <div className="basis-1/2 flex items-center sm:items-start flex-col gap-y-2 text-dark relative z-[1] pt-10 px-3">
          <h1 className="font-thin text-4xl about-heading">
            <span className="font-bold">About Us</span>
            <br /> Fake or Real
          </h1>
          <p className="text-sm font-thin">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="text-sm font-thin">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <button className="mt-4 uppercase text-white bg-dark py-2 px-6 font-semibold rounded-md">
            Explore More
          </button>
        </div>

        {/* decorator */}
        <div className="bg-orange-light-2/50 w-full min-w-[600px] h-[500px] sm:h-[400px] rounded-tl-full absolute -z-[1]  top-64 left-0 sm:-left-36"></div>
      </div>
      <OurRecentWorkSection />
    </>
  )
}

export default AboutUsSection
