import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import { useOnClickOutside } from '@/hooks/useOutsideClick'
import { usePaginationContext } from '@/context/PaginationContext'
const Button = dynamic(() => import('@/components/Buttons/Button'))

const Pagination = () => {
  const { limit, setLimit, page, totalCount, totalPages, setPage } =
    usePaginationContext()

  const { translate } = useAppContext()

  const hasPreviousPage = () => {
    return page > 1
  }
  const hasNextPage = () => {
    return page < totalPages
  }

  const goToNextPage = () => {
    const nextPage = page + 1
    if (nextPage > totalPages) return
    return changePage(page + 1)
  }

  const calculatePage = (pagePosition: number) => {
    return page + (pagePosition - 1)
  }

  const goToPreviousPage = () => {
    const previousPage = page - 1
    if (previousPage < 1) return
    return changePage(page - 1)
  }

  const changePage = (currentPage: number) => {
    if (currentPage != page && page > 0) {
      setPage(currentPage)
    }
  }

  const calculateLimit = () => {
    const newLimit = limit * page
    return newLimit < totalCount ? newLimit : totalCount
  }

  return (
    <div className={`w-full mb-3`}>
      <div className="flex justify-between gap-6 items-center flex-col md:flex-row py-2">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center">
          <div className={`text-dShadeOne text-sm`}>
            {translate('_SHOWING_', 'Showing')} {limit * (page - 1) + 1} -{' '}
            {calculateLimit()} {translate('_OF_', 'of')} {totalCount}{' '}
            {translate('_RESULTS_', 'results')}
          </div>
          <div className="flex flex-row items-center gap-4">
            <Button
              text={translate('_PREVIOUS_', 'Previous')}
              onClick={() => hasPreviousPage() && goToPreviousPage()}
              dark
              small
            />
            <div className="px-4 flex flex-row gap-1 items-center">
              {[...Array(4)].map((_number, i) => {
                return (
                  <div key={`pagination-${i}`}>
                    {calculatePage(i) > 0 && calculatePage(i) <= totalPages && (
                      <button
                        className={`w-8 h-8 hover:border border-primary hover:text-primary text-sm rounded ${
                          calculatePage(i) <= totalPages && calculatePage(i) > 0
                            ? 'cursor-pointer '
                            : 'cursor-default'
                        } ${
                          calculatePage(i) == page
                            ? `border border-primary text-primary`
                            : `hover:border border-primary hover:text-black`
                        }`}
                        onClick={() => {
                          calculatePage(i) <= totalPages
                            ? changePage(calculatePage(i))
                            : null
                        }}
                      >
                        {calculatePage(i) <= totalPages && calculatePage(i) > 0
                          ? calculatePage(i)
                          : ''}
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
            <Button
              text={translate('_NEXT_', 'Next')}
              dark
              onClick={() => hasNextPage() && goToNextPage()}
              small
            />
          </div>
        </div>
        <div className={`flex items-center gap-2 text-dShadeOne text-sm`}>
          <span>{translate('_ITEM_PER_PAGE_', 'Items per page')}</span>{' '}
          <DropDownWithBorder
            itemsPerPage={limit}
            maxItems={totalCount}
            setItemsPerPage={(value) => {
              setLimit(value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export type DropDownWithBorderProps = {
  itemsPerPage: number
  maxItems: number
  setItemsPerPage: (value: number) => void
}

export const DropDownWithBorder = (props: DropDownWithBorderProps) => {
  const { itemsPerPage, maxItems, setItemsPerPage } = props
  const [showDropDownOptions, setShowDropDownOptions] = useState(false)

  const dropDownWithBorderRef = useRef(null)

  const handleClickOutside = () => {
    setShowDropDownOptions(false)
  }

  useOnClickOutside(dropDownWithBorderRef, handleClickOutside)

  return (
    <div
      ref={dropDownWithBorderRef}
      className={`border border-pShadeTwo relative cursor-pointer text-dShadeOne flex gap-x-2 items-center rounded-[4px] px-2.5 py-2 min-w-14 text-sm`}
      onClick={() => {
        setShowDropDownOptions(!showDropDownOptions)
      }}
    >
      {itemsPerPage}
      <Image
        src="/images/arrow-down.svg"
        alt=""
        className="w-4 aspect-square"
        width={16}
        height={16}
      />
      {showDropDownOptions && (
        <div className="flex flex-col absolute z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] top-full overflow-y-scroll rounded bg-white border border-pShadeTwo shadow-lg max-h-20 w-full right-0">
          {Array.from({ length: maxItems }).map((_, index) => (
            <div
              key={index}
              className={`py-2.5 px-3 flex flex-col justify-center ${
                maxItems - 1 !== index && 'border-b'
              }`}
              onClick={() => setItemsPerPage(index + 1)}
            >
              <span className="text-dShadeOne">{index + 1}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Pagination
