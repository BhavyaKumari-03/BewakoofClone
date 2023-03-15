import { useState } from "react"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"


function Slider() {
  const slides = [
    {
      url: "https://images.bewakoof.com/uploads/grid/app/1x1-oversized-graphic-tes-common-1678460699.jpg"
    },
    {
      url: "https://images.bewakoof.com/uploads/grid/app/bwkf-bestsellers-1678372760.jpg"
    },
    {
      url: "https://images.bewakoof.com/uploads/grid/app/MerchMania-Static-1X1-DC-V2-1678785203.jpg"
    },
    {
      url: "https://images.bewakoof.com/uploads/grid/app/static-1x1-SpringTimeDeals-SET-02-common-final-1678449254.jpg"
    }
  ]

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
      <div className='max-w-[1400px] h-[650px] w-[1200px] m-auto pb-4 pt-16 px-4 relative'>
        <div className='w-full h-full rounded-2xl bg-top bg-contain bg-no-repeat duration-500' style={{
          backgroundImage: `url(${slides[currentSlides].url})`
        }}>
          <div className="absolute top-[50%] -translat-x-0 translate-y-[50%] left-[22%] text-2xl rounded-full p-2 ">
            <BsFillArrowLeftCircleFill size={30} onClick={prevslide} />
          </div >

          <div className="absolute top-[50%] -translat-x-0 translate-y-[50%] right-[22%] text-2xl rounded-full p-2">
            <BsFillArrowRightCircleFill size={30} onClick={nextslide} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
