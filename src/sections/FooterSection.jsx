import React from 'react'
import { Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import map from "@/assets/images/map.png"

const playfair_Display = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
})

function FooterSection() {
  return (
    <div id='contact-us' className="bg-black w-full rounded-tr-2xl sm:rounded-tr-full flex flex-col flex-wrap sm:flex-row justify-between gap-y-10 text-white mt-8 p-8">
      <div className="basis-1/2">
        <h1 className={`${playfair_Display.className} text-3xl`}>
          Dream Agency
        </h1>
        <p className="text-sm leading-snug mt-5">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.
        </p>
        <h1 className='font-semibold mt-4'>GET IN TOUCH</h1>

        <div className="mt-8 flex p-0 gap-0">
            <input type="text" placeholder='ENTER YOUR EMAIL' className='bg-transparent px-3 text-white ring-white border border-white outline-none placeholder:text-white' />
            <button className='bg-white text-black py-2 px-8 font-semibold'>SEND</button>
        </div>
      </div>
      <div className="basis-1/2 flex">
        <Image src={map} width={350} height={350} className='aspect-video mx-auto sm:mx-0 mt-auto' alt='map' />
      </div>
    </div>
  )
}

export default FooterSection