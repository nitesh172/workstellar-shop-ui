'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { useAppContext } from '@/context/AppContext'
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

  const testimonials = [
    {
      name: 'Alexandre Dubois',
      role: 'Frontend Developer',
      review_rating: 5,
      review_comment:
        'Working with Workstellar has been a positive experience overall. The platform provides access to interesting projects, and the payment process is smooth. However, there were a few instances where communication with clients could have been improved, leading to minor misunderstandings. Nonetheless, I appreciate the opportunities Workstellar has provided me.',
    },
    {
      name: 'Tech Innovations Inc.',
      role: 'Client',
      review_rating: 5,
      review_comment:
        "We've been using Workstellar's services for over a year now, and we're extremely satisfied with the quality of talent they provide. The developers and designers they've supplied have been instrumental in helping us achieve our project milestones efficiently. Highly recommend!",
    },
    {
      name: 'Digital Dynamics Ltd.',
      role: 'Client',
      review_rating: 4,
      review_comment:
        "Workstellar has been a reliable partner for our software development needs. The developers assigned to us have shown great expertise and professionalism. The only reason for not giving 5 stars is the occasional delay in response times, but overall, we're pleased with their services.",
    },
    {
      name: 'InnovateTech Solutions',
      role: 'Client',
      review_rating: 4.5,
      review_comment:
        "Workstellar's pool of talent is impressive. We've hired both UX/UI designers and software developers through their platform, and they've all delivered exceptional work. The platform is easy to use, and their customer support is responsive. Definitely recommend Workstellar to other companies looking for skilled resources.",
    },
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      review_rating: 5,
      review_comment:
        "I've been working as a software developer through Workstellar for the past six months, and it's been a fantastic experience. The platform is user-friendly, and the support team is always available to help with any issues. I appreciate the opportunity to work with top-tier clients and collaborate with other talented professionals.",
    },
    {
      name: 'Michael Wong',
      role: 'UX/UI Designer',
      review_rating: 4.5,
      review_comment:
        "As a UX/UI designer registered with Workstellar, I've had the chance to work on diverse projects with clients from different industries. The platform makes it easy to manage contracts and payments, and the team behind Workstellar is supportive and efficient. Overall, a great platform for freelancers like me to showcase our skills.",
    },
  ]

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
              renderItem={(
                testimonial: {
                  name: string
                  review_rating: number
                  role: string
                  review_comment: string
                },
                i,
                isSnapPoint
              ) => (
                <div
                  key={i}
                  className={`flex-shrink-0 ${
                    isSnapPoint && 'snap-start'
                  } w-full lg:w-1/2 xl:w-1/3 flex flex-col pl-2 pr-2 gap-2`}
                >
                  <div className="bg-white p-6 h-full rounded-xl flex flex-col gap-3.5">
                    <div className="flex flex-col">
                      <div className="text-sm font-bold text-black">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-grey">
                        {testimonial.role}
                      </div>
                      <div className="flex flex-row gap-2 items-center">
                        <div className="text-xs font-bold mt-0.5 text-black">
                          {testimonial.review_rating}
                        </div>
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={testimonial.review_rating}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="text-sm text-grey">
                      {/* <span className="font-bold text-black">
                        Dedicated to customer satisfaction{' '}
                      </span> */}
                      {testimonial.review_comment}
                    </div>
                    {/* <div className="flex flex-col gap-1">
                      <div className="text-xs font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-grey">
                        {testimonial.role}
                      </div>
                    </div> */}
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
