'use client'
// Import Swiper React components
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { WhatWeDoSliderData } from '@/data/slider'
import Image from 'next/image'
import { useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/virtual'

const WhatWeDoSlider = () => {
  const swiperRef = useRef(null)

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-2 gap-y-5 mt-10">
      <div className="w-[200px] mt-auto flex gap-4 justify-center">
        <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
          <CiCircleChevLeft
            className={`scale-150 text-3xl text-dark`}
          />
        </button>
        <button onClick={() => swiperRef.current?.swiper.slideNext()}>
          <CiCircleChevRight
            className={`scale-150 text-3xl text-dark`}
          />
        </button>
      </div>
      <Swiper
      className='w-full'
        ref={swiperRef}
        modules={[Virtual]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 3,
            centeredSlides:true
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {WhatWeDoSliderData.map((data, index) => (
          <SwiperSlide key={index} virtualIndex={index} className='p-3'>
            <div className="mx-auto w-[90%] h-[192px] bg-white p-4 shadow-md rounded-lg">
              <Image
                src={data.icon}
                width={50}
                height={50}
                style={{ backgroundColor: data.color }}
                alt={data.title}
                className="p-2 aspect-square rounded-md"
              />
              <h1 className="my-2 text-lg text-dark font-bold uppercase">
                {data.title}
              </h1>
              <p className="text-sm text-dark">{data.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default WhatWeDoSlider
