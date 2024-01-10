import Carousel from '@/components/Carousel'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import React from 'react'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const VideoFrame = dynamic(() => import('./VideoFrame'))

const CustomerJourney = () => {
  const itResources = [
    'Guides the customer,',
    'Asks questions so we can help the customer the best way',
    'Add value and help them with the best person for their project.',
  ]

  const testimonials = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="py-7 md:py-14">
      <div className="text-center text-xl md:text-4xl text-black font-bold mb-11">
        Easy & valuable customer journey
      </div>
      <div className="flex flex-col gap-12 md:gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8">
          <div className='w-full h-[569px] bg-[url("/images/cus_jou_block_m_1.svg")] md:bg-[url("/images/cus_jou_block_d_1.svg")] lg:bg-[url("/images/cus_jou_block_m_1.svg")] xl:bg-[url("/images/cus_jou_block_d_1.svg")] bg-cover flex flex-col gap-6 rounded-3xl p-6 bg-no-repeat'>
            <div className="bg-white w-full p-6 flex flex-col gap-6 rounded-2xl">
              <div className="font-semibold md:text-2xl">
                Do you need an IT resource to your business
              </div>
              <div className="flex flex-col gap-2">
                {itResources.map((resources, i) => (
                  <div key={i} className="flex flex-row gap-2 items-start">
                    <Image
                      src="/images/checkbox.svg"
                      width={24}
                      height={24}
                      alt="checkbox"
                      className="w-6 h-6"
                    />
                    <div className="text-sm md:text-base text-grey">
                      {resources}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              text="Let’s talk"
              className="rounded-[40px] rounded-tl-none"
              dark
            />
          </div>
          <div className='w-full h-[569px] bg-[url("/images/cus_jou_block_m_2.svg")] md:bg-[url("/images/cus_jou_block_d_2.svg")] lg:bg-[url("/images/cus_jou_block_m_2.svg")] xl:bg-[url("/images/cus_jou_block_d_2.svg")] bg-cover flex flex-col justify-end gap-6 rounded-3xl p-6 bg-no-repeat'>
            <Button
              text="Let’s talk"
              className="rounded-[40px] rounded-tl-none"
              dark
            />
            <div className="bg-white w-full p-6 flex flex-col gap-6 rounded-2xl">
              <div className="font-semibold md:text-2xl">
                Do you need help with an IT project, app etc.
              </div>
              <div className="flex flex-col gap-2">
                {itResources.map((resources, i) => (
                  <div key={i} className="flex flex-row gap-2 items-start">
                    <Image
                      src="/images/checkbox.svg"
                      width={24}
                      height={24}
                      alt="checkbox"
                      className="w-6 h-6"
                    />
                    <div className="text-sm md:text-base text-grey">
                      {resources}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="Testimonials"
          className="bg-bgbule w-full rounded-3xl p-6 px-4 md:p-10 flex flex-col xl:flex-row items-center gap-8"
        >
          <div className="flex-1 w-full xl:w-1/2">
            <div className="font-pacifico text-3xl md:text-4xl text-center mb-6 text-white">
              Testimonies
            </div>
            <Carousel
              data={testimonials}
              renderItem={(testimonial, i, isSnapPoint) => (
                <div
                  key={i}
                  className={`flex-shrink-0 ${
                    isSnapPoint && 'snap-start'
                  } w-full md:w-1/2 flex flex-col pl-2 pr-2 gap-2`}
                >
                  <div className="bg-white p-6 rounded-xl flex flex-col gap-3.5">
                    <div className="text-sm font-bold text-black">
                      GURANTEEPIVOT
                    </div>
                    <div className="text-sm text-grey">
                      <span className="font-bold text-black">
                        Dedicated to customer satisfaction{' '}
                      </span>
                      They listen, understand our needs, communicate well and
                      are constantly working to ensure our satisfaction at all
                      stages of the recruitment process.
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-medium">
                        Rachel McDermott
                      </div>
                      <div className="text-xs text-grey">
                        Mechanical Engineering
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </div>
          <VideoFrame
            id="Why us"
            className="flex-1 w-full flex flex-col gap-0.5"
          />
        </div>
      </div>
    </div>
  )
}

export default CustomerJourney
