'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { levels, workType } from '@/utils/config'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import { useResourceContext } from '@/context/ResourceContext'
import { usePaginationContext } from '@/context/PaginationContext'
import { Rating } from '@smastrom/react-rating'
import DropDown from '@/components/Dropdown/Dropdown'
const Pagination = dynamic(() => import('@/components/Pagination'))
const LottieAnimation = dynamic(() => import('../LottieAnimation'))
const TextField = dynamic(() => import('@/components/Input/TextField'))

const ResourceMainPage = () => {
  const router = useRouter()
  const { translate } = useAppContext()
  const { fetchResources, talents, loading, skills, designations } = useResourceContext()
  const [filter, setFilter] = useState<boolean>(false)

  const [workFilter, setWorkFilter] = useState<string>('')
  const [levelFilter, setLevelFilter] = useState<string>('')
  const [skillFilter, setSkillFilter] = useState<string>('')
  const [designationFilter, setDesignationFilter] = useState<string>('')
  const [search, setSearch] = useState<boolean>(false)
  const [searchText, setSearchText] = useState<string>('')

  const { page, limit } = usePaginationContext()

  useEffect(() => {
    fetchResources(
      `talents?perPage=${limit}&currentPage=${page}&paymentType=${workFilter}&level=${levelFilter}&searchString=${searchText}&skill=${skillFilter}&designation=${designationFilter}&mode=USER_SITE`
    )
  }, [workFilter, levelFilter, limit, page, skillFilter, designationFilter])

  useEffect(() => {
    if (searchText && search) {
      fetchResources(
        `talents?perPage=${limit}&currentPage=${page}&paymentType=${workFilter}&level=${levelFilter}&searchString=${searchText}&skill=${skillFilter}&designation=${designationFilter}&mode=USER_SITE`
      )
      setSearch(false)
    }
  }, [search])

  return (
    <div>
      <div className="text-2xl md:text-4xl font-bold mb-11">
        {translate('_RESOURCES_', 'Resources')}
      </div>
      <div className="flex flex-col gap-8 2xl:flex-row justify-between mb-9">
        <TextField
          label={translate('_SEARCH_', 'Search')}
          placeholder={translate('_SEARCH_', 'Search')}
          className="w-full md:w-96 py-0"
          onkeyPressed={() => setSearch(true)}
          onChange={(e) => {
            if (e.target.value === '') {
              fetchResources(
                `talents?perPage=100&paymentType=${workFilter}&level=${levelFilter}&mode=USER_SITE`
              )
            }
            setSearchText(e.target.value)
          }}
          value={searchText}
        />
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 2xl:justify-end flex-1">
          <DropDown
            availableOptionKey="name"
            primary
            className="w-full md:w-[190px]"
            label={translate('_WORK_TYPE_', 'Work type')}
            availableOptions={workType}
            selectOptionKey="value"
            setOption={(e: any) => {
              setWorkFilter(e.target.value)
            }}
            option={workType.find((type) => type.value === workFilter)}
          />
          <DropDown
            availableOptionKey="name"
            primary
            className="w-full md:w-[190px]"
            label={translate('_LEVEL_', 'Level')}
            availableOptions={levels}
            selectOptionKey="value"
            setOption={(e: any) => {
              setLevelFilter(e.target.value)
            }}
            option={levels.find((type) => type.value === workFilter)}
          />
          <DropDown
            availableOptionKey="name"
            primary
            className="w-full md:w-[200px]"
            label={translate('_DESIGNATION_', 'Designation')}
            availableOptions={designations.map((designation) => {
              return {name: designation}
            })}
            selectOptionKey="name"
            setOption={(e: any) => {
              setDesignationFilter(e.target.value)
            }}
            option={designations.map((designation) => {
              return {name: designation}
            }).find((type) => type.name === designationFilter)}
          />
          <DropDown
            availableOptionKey="name"
            primary
            className="w-full md:w-[190px]"
            label={translate('_SKILLS_', 'Skills')}
            availableOptions={skills}
            selectOptionKey="name"
            setOption={(e: any) => {
              setSkillFilter(e.target.value)
            }}
            option={skills.find((type) => type.name === skillFilter)}
          />
        </div>
        {/* <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            filter ? 'flex' : 'hidden'
          } flex absolute shadow-lg xl:shadow-none top-16 md:top-[90px] transition-all ease-in-out duration-300 -right-2 min-[425px]:right-0 p-6 min-[425px]:p-8 z-10 rounded-2xl xl:rounded-none border xl:border-none xl:p-0 bg-white xl:static flex-col xl:flex-row gap-10 xl:items-center xl:flex`}
        >
          <div className="flex flex-col xl:flex-row gap-2.5 xl:items-center">
            <div className="text-sm text-grey">
              {translate('_WORK_TYPE_', 'Work type')}
            </div>
            <div className="flex flex-row gap-2.5 items-center">
              {workType.map((type, inx) => (
                <div
                  key={inx}
                  onClick={() =>
                    workFilter === type.value
                      ? setWorkFilter('')
                      : setWorkFilter(type.value)
                  }
                  className={`rounded-3xl cursor-pointer border text-sm border-black hover:bg-black hover:text-white py-2 px-4 ${
                    workFilter === type.value
                      ? 'bg-black text-white'
                      : 'bg-transparent'
                  }`}
                >
                  {translate(type.key, type.name)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-2.5 xl:items-center">
            <div className="text-sm text-grey">
              {translate('_LEVEL_', 'Level')}
            </div>
            <div className="flex flex-row gap-2.5 items-center">
              {levels.map((level, index) => (
                <div
                  key={index}
                  onClick={() =>
                    levelFilter === level.value
                      ? setLevelFilter('')
                      : setLevelFilter(level.value)
                  }
                  className={`rounded-3xl cursor-pointer border text-sm border-black hover:bg-black hover:text-white py-2 px-4 ${
                    levelFilter === level.value
                      ? 'bg-black text-white'
                      : 'bg-transparent'
                  }`}
                >
                  {translate(level.key, level.name)}
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
      {!!talents && !!talents.length ? (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 min-[425px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 pb-7">
            {talents.map((talent, inx) => {
              return (
                <div
                  key={talent.id}
                  className={`rounded-xl relative border p-3 md:p-5 flex gap-3 md:gap-6 ${
                    inx % 2 === 0 ? 'flex-col' : 'flex-col'
                  }`}
                >
                  <div className="bg-imagebg flex justify-center bg-opacity-20 rounded-[16px] pt-4 md:pt-9">
                    <Image
                      src={`/images/${talent.avatar}.png`}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="w-36 md:w-56 h-[150px] md:h-[224px]"
                      alt="person_image"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
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
                    <Rating style={{ maxWidth: 100 }} value={talent.rating} />
                  </div>
                </div>
              )
            })}
          </div>
          <Pagination />
        </div>
      ) : !!loading ? (
        <div className="flex flex-col items-center justify-center h-[500px] w-full">
          <LottieAnimation />
        </div>
      ) : (
        <div>{translate('_NO_RESOURCES_', 'No Resources')}</div>
      )}
    </div>
  )
}

export default ResourceMainPage
