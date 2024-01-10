import { lazy } from 'react'
import { CarouselProps } from '@/types'
import { useSnapCarousel } from 'react-snap-carousel'

const Carousel = (props: CarouselProps) => {
  const { data, renderItem, className } = props
  const { scrollRef, pages, activePageIndex, goTo, snapPointIndexes } =
    useSnapCarousel()

  return (
    <div className={`flex flex-col gap-6 md:gap-9 ${className}`}>
      <div
        className="flex flex-row overflow-x-auto scroll-smooth transition duration-300 overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] snap-proximity relative"
        ref={scrollRef}
      >
        {!!data &&
          !!data.length &&
          data.map((item, index) =>
            renderItem(item, index, snapPointIndexes.has(index))
          )}
      </div>
      <div className="flex flex-row self-center items-center gap-1">
        {pages.map((_, i) => (
          <div
            className={`w-2.5 cursor-pointer h-2.5 border border-grey rounded-full ${
              activePageIndex === i ? 'bg-black' : 'bg-white'
            }`}
            key={i}
            onClick={() => goTo(i)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
