'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { useAppContext } from '@/context/AppContext'
// import ReactStars from 'react-stars'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Carousel = dynamic(() => import('@/components/Carousel'))
const Button = dynamic(() => import('@/components/Buttons/Button'))
const ScheduleMeeting = dynamic(() => import('../ScheduleMeeting'))
const PopupEncloser = dynamic(
  () => import('@/components/PopupEncloser/PopupEncloser')
)

const CustomerJourney = () => {
  const [mPopup, setMPopup] = useState<boolean>(false)

  const { translate } = useAppContext()

  const itResources = [
    {
      value: 'Guides the customer,',
      key: '_GUIDES_CUSTOMER_POINT_',
    },
    {
      value: 'Asks questions so we can help the customer the best way',
      key: '_ASKS_QUESTIONS_POINT_',
    },
    {
      value: 'Add value and help them with the best person for their project.',
      key: '_ADD_VALUE_AND_HELP_POINT_',
    },
  ]

  const itProject = [
    {
      value: 'Clearly outline the goals and purpose of the project.',
      key: '_CLEARLY_OUTLINE_POINT_',
    },
    {
      value: 'Investigate and comprehend the challenges or issues at hand.',
      key: '_INVESTIGATE_POINT_',
    },
    {
      value: 'Explore creative and effective ways to solve the problem.',
      key: '_EXPLORE_CREATIVE_POINT_',
    },
  ]

  const testimonials = [1, 2, 3, 4, 5, 6, 7]

  const handlePopup = () => setMPopup(!mPopup)

  return (
    <div className="py-7 md:py-14">
      <div className="text-center text-xl md:text-4xl text-black font-bold mb-11">
        {translate(
          '_CUSTOMER_JOURNEY_HEADING_',
          'Easy & valuable customer journey'
        )}
      </div>
      <div className="flex flex-col gap-12 md:gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8">
          <div className='w-full h-[569px] bg-[url("/images/cus_jou_block_m_1.svg")] md:bg-[url("/images/cus_jou_block_d_1.svg")] lg:bg-[url("/images/cus_jou_block_m_1.svg")] xl:bg-[url("/images/cus_jou_block_d_1.svg")] bg-cover flex flex-col gap-6 rounded-3xl p-6 bg-no-repeat'>
            <div className="bg-white w-full p-6 flex flex-col gap-6 rounded-2xl">
              <div className="font-semibold md:text-2xl">
                {translate(
                  '_IT_RESOURCES_TEXT_',
                  'Do you need an IT resource to your business'
                )}
              </div>
              <div className="flex flex-col gap-2">
                {itResources.map((resources, i) => (
                  <div key={i} className="flex flex-row gap-2 items-start">
                    <Image
                      src="/images/checkbox.svg"
                      width={24}
                      loading="lazy"
                      height={24}
                      alt="checkbox"
                      className="w-6 h-6"
                    />
                    <div className="text-sm md:text-base text-grey">
                      {translate(resources.key, resources.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Button
              onClick={handlePopup}
              text={translate('_LET_TALK_', 'Let’s talk')}
              className="rounded-[40px] rounded-tl-none"
              dark
            />
          </div>
          <div className='w-full h-[569px] bg-[url("/images/cus_jou_block_m_2.svg")] md:bg-[url("/images/cus_jou_block_d_2.svg")] lg:bg-[url("/images/cus_jou_block_m_2.svg")] xl:bg-[url("/images/cus_jou_block_d_2.svg")] bg-cover flex flex-col justify-end gap-6 rounded-3xl p-6 bg-no-repeat'>
            <Button
              text={translate('_LET_TALK_', 'Let’s talk')}
              onClick={handlePopup}
              className="rounded-[40px] rounded-tl-none"
              dark
            />
            <div className="bg-white w-full p-6 flex flex-col gap-6 rounded-2xl">
              <div className="font-semibold md:text-2xl">
                {translate(
                  '_IT_PROJECT_TEXT_',
                  'Do you need help with an IT project, app etc.'
                )}
              </div>
              <div className="flex flex-col gap-2">
                {itProject.map((resources, i) => (
                  <div key={i} className="flex flex-row gap-2 items-start">
                    <Image
                      src="/images/checkbox.svg"
                      width={24}
                      height={24}
                      loading="lazy"
                      alt="checkbox"
                      className="w-6 h-6"
                    />
                    <div className="text-sm md:text-base text-grey">
                      {translate(resources.key, resources.value)}
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
              {translate('_TESTIMONIES_', 'Testimonies')}
            </div>
            <Carousel
              data={testimonials}
              renderItem={(testimonial, i, isSnapPoint) => (
                <div
                  key={i}
                  className={`flex-shrink-0 ${
                    isSnapPoint && 'snap-start'
                  } w-full lg:w-1/2 xl:w-1/3 flex flex-col pl-2 pr-2 gap-2`}
                >
                  <div className="bg-white p-6 rounded-xl flex flex-col gap-3.5">
                    <div className="flex flex-col">
                      <div className="text-sm font-bold text-black">
                        GURANTEEPIVOT
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <div className="text-xs font-bold text-black">4.2</div>
                        {/* <ReactStars
                          count={5}
                          value={4.2}
                          size={20}
                          edit={false}
                        /> */}
                        <Rating style={{ maxWidth: 100 }} value={2.1} readOnly />
                      </div>
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
        </div>
      </div>
      <PopupEncloser show={mPopup} close={handlePopup}>
        <ScheduleMeeting />
      </PopupEncloser>
    </div>
  )
}

export default CustomerJourney
