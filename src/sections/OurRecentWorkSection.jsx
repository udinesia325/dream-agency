import RecentWorkSlider from '@/components/RecentWorkSlider'
import React from 'react'

function OurRecentWorkSection() {
  return (
    <div className="mt-28 flex flex-col flex-wrap justify-between sm:flex-row px-3 text-dark">
        <div className='basis-1/2'>
             <h1 className="inline-block font-thin text-4xl recent-work-heading">
        <span className="font-bold">
          Our Recent Work <br />
        </span>
        By Our Experts
      </h1>
        </div>
     
      <p className='basis-1/2 font-thin text-sm'>
        Lorem Ipsum has been the industry's standard dummy text ever <br /> since the
        1500s, when an unknown printer took a galley of type and <br /> scrambled it to
        make a type specimen book.
      </p>
      <div className="basis-full w-full flex flex-col-reverse sm:flex-row gap-2 gap-y-5 mt-16">
        <RecentWorkSlider />
      </div>
    </div>
  )
}

export default OurRecentWorkSection
