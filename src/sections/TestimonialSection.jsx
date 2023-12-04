'use client'
import { testimonial } from '@/data/testimonial'
import React from 'react'
import { Virtual } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'
import quote from "@/assets/images/svg/quote.svg"
import Image from 'next/image'

function TestimonialSection() {
  return (
    <div className="mt-16 flex flex-col gap-y-10">
      <h1 className="mx-auto text-center inline-block text-4xl text-dark font-thin testimonial-heading">
        <span className="font-bold">Our Testimonials</span>
        <br />
        What Our Clients <br className='sm:hidden' /> Are Saying
      </h1>
      <Swiper
        className="w-full"
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
        }}
      >
        {testimonial.map((data, index) => (
          <SwiperSlide key={index} virtualIndex={index} className="p-3">
            <div className="mx-auto w-[90%] max-w-[400px] bg-white p-4 shadow-md rounded-lg">
              <Image
                src={quote}
                width={85}
                height={85}
                style={{ backgroundColor: data.color }}
                alt={data.title}
                className="p-2 aspect-square rounded-md"
              />
              <p className="text-sm text-dark font-light leading-snug">{data.content}</p>
              <h1 className="my-2 text-lg text-dark font-bold uppercase">
                <span className="text-orange">—</span> {data.title}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialSection
