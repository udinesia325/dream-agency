'use client'
// Import Swiper React components
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci'
import { Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { RecentWorkData } from '@/data/slider'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import 'swiper/css'
import 'swiper/css/virtual'
import { animate, inView } from 'framer-motion'

const RecentWorkSlider = () => {
  const swiperRef = useRef(null)
  useEffect(() => {
    inView(swiperRef.current, ({ target }) => {
      animate(target, { scale: [0, 0, 0, 1] }, { delay: .5 })
    })
  }, [])
  return (
    <>
      <div className="w-[200px] mt-auto flex gap-4 justify-center">
        <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
          <CiCircleChevLeft
            className={`scale-150 text-3xl text-dark`}
            aria-label="prev button"
          />
        </button>
        <button onClick={() => swiperRef.current?.swiper.slideNext()}>
          <CiCircleChevRight
            className={`scale-150 text-3xl text-dark`}
            aria-label="next button"
          />
        </button>
      </div>
      <Swiper
        className="w-full"
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
            centeredSlides: true,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {RecentWorkData.map((data, index) => (
          <SwiperSlide key={index} virtualIndex={index} className="p-3">
            <div className="mx-auto w-[90%] bg-white p-4 shadow-md rounded-lg">
              <Image
                src={data.image}
                width={350}
                height={200}
                style={{ backgroundColor: data.color }}
                alt={data.title}
                className="p-2 w-full aspect-video object-cover rounded-md"
              />
              <div className="flex justify-between items-center">
                <h1 className="my-2 text-lg text-dark font-bold uppercase">
                  {data.title}
                </h1>
                <button className="text-dark text-sm tracking-wide border-2 border-dark rounded-full py-[5px] px-2">
                  View Work
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default RecentWorkSlider
