import { ContactDetailWithFormProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const ContactDetailWithForm: React.FC<ContactDetailWithFormProps> = (props) => {
  const { id, children, label } = props

  const options = [
    {
      title: 'Call us on',
      value: '+45 12 34 56 78',
    },
    {
      title: 'Mail us on',
      value: 'Info@gmail.com',
    },
    {
      title: 'Whatsapp us',
      value: '+45 20 30 40 50',
    },
  ]

  return (
    <div id={id} className="py-7 md:py-14">
      {label ? <div className="text-center text-xl md:text-4xl text-black font-bold mb-11">
        Contact us
      </div> : <></>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8">
        <div className='w-full min-h-[491px] h-[569px] lg:h-auto bg-[url("/images/cus_jou_block_m_1.svg")] md:bg-[url("/images/cus_jou_block_d_1.svg")] lg:bg-[url("/images/cus_jou_block_m_1.svg")] xl:bg-[url("/images/contact_bg.svg")] bg-cover flex flex-col gap-6 rounded-3xl p-6 bg-no-repeat'>
          <div className="bg-white w-full p-6 flex flex-col gap-6 rounded-2xl">
            <div className="font-semibold md:text-2xl">
              Do you need an IT resource to your business
            </div>
            <div className="flex flex-col gap-2">
              {options.map((option, i) => (
                <div key={i} className="flex flex-row gap-3 items-start">
                  <div className="flex flex-row gap-2">
                    <Image
                      src="/images/checkbox.svg"
                      width={24}
                      height={24}
                      alt="checkbox"
                      className="w-6 h-6"
                    />
                    <div className="text-sm md:text-base text-grey">
                      {option.title}
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-grey">
                    : {option.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default ContactDetailWithForm
