import Image from 'next/image'
import React from 'react'

const ResourceSection = () => {
  const persons = [
    {
      id: 0,
      name: 'Floyd Miles',
      role: 'Developer',
      images: '/images/person_1.svg',
    },
    {
      id: 1,
      name: 'Rachel McDermott',
      role: 'Mechanical Engineering',
      images: '/images/person_2.svg',
    },
    {
      id: 2,
      name: 'Jenny Wilson',
      role: 'DevOps',
      images: '/images/person_3.svg',
    },
    {
      id: 3,
      name: 'Rachel McDermott',
      role: 'Mechanical Engineering',
      images: '/images/person_4.svg',
    },
  ]

  return (
    <div id='Resources' className='py-7 md:py-14'>
      <div className="text-center text-xl md:text-4xl text-black font-bold mb-11">
        Resources
      </div>
      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {persons.map((person) => (
          <div key={person.id} className={`rounded-xl relative border p-3 md:p-5 flex gap-3 md:gap-6 ${person.id % 2 === 0 ? 'flex-col' : 'flex-col md:flex-col-reverse'}`}>
            <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[10px] px-3.5 md:px-7 pt-4 md:pt-9">
              <Image
                src={person.images}
                width={224}
                height={270}
                className='w-32 md:w-56 h-[150px] md:h-[224px]'
                alt="person_image"
              />
            </div>
            <div className='flex flex-row items-center justify-between'>
              <div>
                <div className="text-base md:text-xl font-medium text-black">
                  {person.name}
                </div>
                <div className="text-sm font-medium text-grey">{person.role}</div>
              </div>
              <Image src="images/redirect.svg" alt='redirect' className='absolute md:static top-4 right-4 w-4 h-4 md:h-6 md:w-6' width={24} height={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResourceSection
