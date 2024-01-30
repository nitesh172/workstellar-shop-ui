'use client'
import SubscriptionSection from '@/components/Blocks/SubscriptionSection'
import TextField from '@/components/Input/TextField'
import { useAppContext } from '@/context/AppContext'
import { HttpMethod, TalentProps, TalentResponseProps } from '@/types'
import { useCaller } from '@/utils/API'
import { level, levels, workType } from '@/utils/config'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Resources = () => {
  const router = useRouter()
  const [filter, setFilter] = useState<boolean>(false)
  const [talent, setTalent] = useState<TalentProps[]>([])

  const [workFilter, setWorkFilter] = useState<string>('')
  const [levelFilter, setLevelFilter] = useState<string>('')
  const [search, setSearch] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')

  const { execute: fetchResources } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentResponseProps) => {
      if (!resp) return
      setTalent(resp.talents)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  useEffect(() => {
    fetchResources(
      `talents?perPage=100&paymentType=${workFilter}&level=${levelFilter}&searchString=${searchText}`
    )
  }, [workFilter, levelFilter])

  useEffect(() => {
    if (searchText && search) {
      fetchResources(
        `talents?perPage=100&paymentType=${workFilter}&level=${levelFilter}&searchString=${searchText}`
      )
      setSearch(false)
    }
  }, [search])

  return (
    <div className="py-7 md:py-14 relative" onClick={() => setFilter(false)}>
      <div className="flex flex-row justify-between items-center">
        <div className="text-2xl md:text-4xl font-bold mb-11">Resources</div>
        <Image
          src="/images/filter.svg"
          onClick={(e) => {
            e.stopPropagation()
            setFilter(!filter)
          }}
          className="flex xl:hidden w-6 h-6 cursor-pointer"
          width={24}
          height={24}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-8 2xl:flex-row justify-between mb-9">
        <TextField
          label="Search"
          placeholder="Search"
          className="w-full md:w-96"
          onkeyPressed={() => setSearch(true)}
          onChange={(e) => {
            if (e.target.value === '') {
              fetchResources(
                `talents?perPage=100&paymentType=${workFilter}&level=${levelFilter}`
              )
            }
            setSearchText(e.target.value)
          }}
          value={searchText}
        />
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            filter ? 'flex' : 'hidden'
          } flex absolute shadow-lg xl:shadow-none top-16 md:top-[90px] transition-all ease-in-out duration-300 -right-2 min-[425px]:right-0 p-6 min-[425px]:p-8 z-10 rounded-2xl xl:rounded-none border xl:border-none xl:p-0 bg-white xl:static flex-col xl:flex-row gap-10 xl:items-center xl:flex`}
        >
          <div className="flex flex-col xl:flex-row gap-2.5 xl:items-center">
            <div className="text-sm text-grey">Work type</div>
            <div className="flex flex-row gap-2.5 items-center">
              {workType.map((type) => (
                <div
                  onClick={() =>
                    workFilter === type.value
                      ? setWorkFilter('')
                      : setWorkFilter(type.value)
                  }
                  className={`rounded-3xl cursor-pointer border border-black hover:bg-black hover:text-white py-2 px-4 ${
                    workFilter === type.value
                      ? 'bg-black text-white'
                      : 'bg-transparent'
                  }`}
                >
                  {type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-2.5 xl:items-center">
            <div className="text-sm text-grey">Level</div>
            <div className="flex flex-row gap-2.5 items-center">
              {levels.map((level) => (
                <div
                  onClick={() =>
                    levelFilter === level.value
                      ? setLevelFilter('')
                      : setLevelFilter(level.value)
                  }
                  className={`rounded-3xl cursor-pointer border border-black hover:bg-black hover:text-white py-2 px-4 ${
                    levelFilter === level.value
                      ? 'bg-black text-white'
                      : 'bg-transparent'
                  }`}
                >
                  {level.name}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="flex flex-col xl:flex-row gap-2.5 xl:items-center">
            <div className="text-sm text-grey">Size</div>
            <div className="flex flex-row gap-2.5 items-center">
              <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
                Large
              </div>
              <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
                Medium
              </div>
              <div className="rounded-3xl cursor-pointer border border-black hover:bg-black bg-transparent hover:text-white py-2 px-4">
                Small
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 pb-7">
        {talent.map((talent, inx) => (
          <div
            key={talent.id}
            className={`rounded-xl relative border p-3 md:p-5 flex gap-3 md:gap-6 ${
              inx % 2 === 0 ? 'flex-col' : 'flex-col md:flex-col-reverse'
            }`}
          >
            <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[10px] px-3.5 md:px-7 pt-4 md:pt-9">
              <Image
                src={`/images/${talent.avatar}.svg`}
                width={224}
                height={270}
                className="w-32 md:w-56 h-[150px] md:h-[224px]"
                alt="person_image"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <div className="text-base md:text-xl font-medium text-black">
                  {talent.user.entityName}
                </div>
                <div className="text-sm font-medium text-grey">
                  {talent.designation}
                </div>
              </div>
              <Image
                src="/images/redirect.svg"
                alt="redirect"
                onClick={() => router.push(`/resources/${talent.id}`)}
                className="cursor-pointer absolute md:static top-4 right-4 w-4 h-4 md:h-6 md:w-6"
                width={24}
                height={24}
              />
            </div>
          </div>
        ))}
      </div>
      <SubscriptionSection />
    </div>
  )
}

export default Resources

// const persons = [
//   {
//     id: 0,
//     name: 'Floyd Miles',
//     role: 'Developer',
//     images: '/images/person_1.svg',
//   },
//   {
//     id: 1,
//     name: 'Rachel McDermott',
//     role: 'Mechanical Engineering',
//     images: '/images/person_2.svg',
//   },
//   {
//     id: 2,
//     name: 'Jenny Wilson',
//     role: 'DevOps',
//     images: '/images/person_3.svg',
//   },
//   {
//     id: 3,
//     name: 'Rachel McDermott',
//     role: 'Mechanical Engineering',
//     images: '/images/person_4.svg',
//   },
// ]
