import React from 'react'
import { useState } from 'react';
import {CiCircleChevLeft,CiCircleChevRight} from "react-icons/ci"


export default function Carousel() {
  
  const slides = [
    {
      url:"https://images.bewakoof.com/uploads/grid/app/1x1-revmped-easy-breezy-vests--1--1678359282.jpg"
    },
    {
      url:
        "https://images.bewakoof.com/uploads/grid/app/1x1-ultimate-joggers-1678171399.jpg"
    },
    {
      url:
        "https://images.bewakoof.com/uploads/grid/app/static-1x1-LimitedOffer-04-1676028999.jpg"
    },
    {
      url:
        "https://images.bewakoof.com/uploads/grid/app/1x1Banner-GraphicBags-01-1676555256.jpg"
    }
  ];

  const [currentSlides, setcurrentslides] = useState(0);

  const prevslide = () => {
    const isFirstSlide = currentSlides === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlides - 1;
    setcurrentslides(newIndex)
  }

  const nextslide = () => {
    const isLastSlide = currentSlides === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlides + 1;
    setcurrentslides(newIndex)
  }
  return (
    <>
      <div className='max-w-[1400px] h-[650px] w-[1200px] m-auto py-16 px-4 relative'>
        <div className='w-full h-full rounded-2xl bg-top  bg-contain bg-no-repeat duration-500' style={{
          backgroundImage: `url(${slides[currentSlides].url})`
        }}>
          <div className="absolute top-[50%] -translat-x-0 translate-y-[50%] left-[25%] text-2xl rounded-full p-2 ">
            < CiCircleChevLeft size={30} onClick={prevslide} />
          </div >

          <div className="absolute top-[50%] -translat-x-0 translate-y-[50%] right-[25%] text-2xl rounded-full p-2">
            <CiCircleChevRight size={30} onClick={nextslide} />
          </div>
        </div>
      </div>
    </>
  )
}
