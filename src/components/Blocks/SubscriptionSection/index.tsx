'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { level, size, workType } from '@/utils/config'
import { HttpMethod, TalentProps, TalentResponseProps } from '@/types'
import toast from 'react-hot-toast'
import { useCaller } from '@/utils/API'
import { useAppContext } from '@/context/AppContext'
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const CheckBox = dynamic(() => import('@/components/Input/CheckBox'))

const SubscriptionSection = () => {
  const [talents, setTalents] = useState<
    { talent: TalentProps; checked: boolean }[]
  >([])

  const { translate } = useAppContext()

  const [selectWorkType, setSelectWorkType] = useState<string>('')
  const [selectLevel, setSelectLevel] = useState<string>('')
  const [selectSize, setSelectSize] = useState<string>('')
  const [amount, setAmount] = useState(0)
  const [numberOfTalent, setNumberOfTalent] = useState(0)

  const { execute: fetchResources } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentResponseProps) => {
      if (!resp) return
      let tempTalent = resp.talents.map((talent) => {
        return {
          talent,
          checked: false,
        }
      })
      setAmount(0)
      setNumberOfTalent(0)
      setTalents(tempTalent)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  useEffect(() => {
    selectWorkType &&
      selectLevel &&
      fetchResources(
        `talents?perPage=1000&paymentType=${selectWorkType}&level=${selectLevel}&mode=USER_SITE`
      )
  }, [selectWorkType, selectLevel])

  return (
    <div id="Price" className="py-7 md:pt-14">
      <div className='rounded-3xl flex flex-col items-start lg:items-center gap-4 xl:flex-row xl:gap-16 bg-[url("/images/subscription_bg_m.svg")] md:bg-[url("/images/subscription_bg_d.svg")] bg-no-repeat bg-cover py-8 px-6 md:p-9'>
        <div className="p-0 md:p-14 w-full lg:w-auto">
          <div className="flex flex-col gap-5 rounded-3xl justify-center items-center bg-white py-16 md:py-24 px-8 min-[425px]:px-20 md:px-[73px]">
            <div className="text-xl md:text-5xl font-bold">
              {translate('_CALCULATE_', 'Calculate')}
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl md:text-8xl font-bold">${amount}</div>
              <div className="text-sm">{translate('_PRICE_', 'Price')}</div>
            </div>
            <div className="text-sm md:texxt-base text-grey text-center">
              {translate(
                '_PRICE_HELP_TEXT_1_',
                'To subscribe, simply fill out our contact form,'
              )}
              <br />
              {translate(
                '_PRICE_HELP_TEXT_2_',
                "and we'll reach out to you shortly."
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full flex-col gap-4 md:gap-5">
          <DropDown
            availableOptionKey="name"
            label={translate('_SELECT_WORK_TYPE_', 'Select work type')}
            availableOptions={workType}
            name="workType"
            setOption={(e: any) => setSelectWorkType(e.target.value.value)}
          />
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <DropDown
              availableOptionKey="name"
              label={translate('_RESOURCE_LEVEL_', 'Resources level')}
              availableOptions={level}
              name="level"
              setOption={(e: any) => setSelectLevel(e.target.value.value)}
            />
            <DropDown
              availableOptionKey="name"
              label={translate('_RESOURCE_SIZE_', 'Resources size')}
              name="size"
              availableOptions={size}
              setOption={(e: any) => setSelectSize(e.target.value.value)}
            />
          </div>
          {!!selectLevel && !!selectSize && !!selectWorkType && (
            <div className="rounded-2xl bg-white p-5">
              <div className="text-sm font-bold mb-4">
                {translate('_SELECT_RESOURCES_', 'Select Resources')}
              </div>
              <div className="max-h-64 flex flex-col gap-2 overflow-scroll">
                {!!talents && !!talents.length ? (
                  talents.map((item, index) => (
                    <CheckBox
                      key={index}
                      id={`checkbox-${index}`}
                      label={`${item?.talent?.user?.entityName}`}
                      value={item.checked === true ? true : false}
                      onChange={(checked) => {
                        let temp = talents
                        if (checked) {
                          if (selectSize === 'SMALL') {
                            if (numberOfTalent < 2) {
                              temp[index].checked = true
                              setNumberOfTalent(numberOfTalent + 1)
                              setAmount(amount + Number(item.talent.amount))
                            } else {
                              toast.error(
                                translate(
                                  '_SMALL_SIZE_PACKAGE_ERROR_',
                                  'Small size packge have only 2 talent.'
                                )
                              )
                            }
                          } else if (selectSize === 'MEDIUM') {
                            if (numberOfTalent < 5) {
                              temp[index].checked = true
                              setNumberOfTalent(numberOfTalent + 1)
                              setAmount(amount + Number(item.talent.amount))
                            } else {
                              toast.error(
                                translate(
                                  '_MEDIUM_SIZE_PACKAGE_ERROR_',
                                  'Medium size packge have only 5 talent.'
                                )
                              )
                            }
                          } else {
                            if (numberOfTalent < 10) {
                              temp[index].checked = true
                              setNumberOfTalent(numberOfTalent + 1)
                              setAmount(amount + Number(item.talent.amount))
                            } else {
                              toast.error(
                                translate(
                                  '_BIG_SIZE_PACKAGE_ERROR_',
                                  'Big size packge have only 10 talent.'
                                )
                              )
                            }
                          }
                        } else {
                          temp[index].checked = false
                          setNumberOfTalent(numberOfTalent - 1)
                          setAmount(amount - Number(item.talent.amount))
                        }
                        setTalents(temp)
                      }}
                    />
                  ))
                ) : (
                  <div>{translate('_NO_RESOURCES_', 'No Resources')}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SubscriptionSection
