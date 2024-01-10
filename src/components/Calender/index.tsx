'use client'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import Image from 'next/image'
import { Fragment, useState } from 'react'

let colStartClasses = [
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-11T13:00',
    endDatetime: '2022-05-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T09:00',
    endDatetime: '2022-05-20T11:30',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-20T17:00',
    endDatetime: '2022-05-20T18:30',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-06-09T13:00',
    endDatetime: '2022-06-09T14:30',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2024-01-13T14:00',
    endDatetime: '2024-01-13T14:30',
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Calender = () => {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  )

  return (
    <div className="w-full p-4 bg-[#F8F8F8] flex flex-col rounded-xl">
      <div className="flex items-center">
        <h2 className="flex-auto  text-black text-lg md:text-2xl">
          {format(firstDayCurrentMonth, 'MMM yyyy')}
        </h2>
        <button
          type="button"
          onClick={previousMonth}
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <Image
            src="/images/arrow-down.svg"
            alt="d"
            className="rotate-90 w-5 h-5"
            width={16}
            height={16}
          />
        </button>
        <button
          onClick={nextMonth}
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <Image
            src="/images/arrow-down.svg"
            alt="d"
            className="-rotate-90 w-5 h-5"
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className="grid text-black grid-cols-7 mt-5 gap-x-0.5 text-xs font-light">
        <div className="py-3 px-4">Sun</div>
        <div className="py-3 px-4">Mon</div>
        <div className="py-3 px-4">Tue</div>
        <div className="py-3 px-4">Wed</div>
        <div className="py-3 px-4">Thr</div>
        <div className="py-3 px-4">Fri</div>
        <div className="py-3 px-4">Sat</div>
      </div>
      <div className="grid grid-cols-7 text-start gap-x-0.5 mt-2 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              'pb-1.5'
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              disabled={isPast(day) && !isToday(day)}
              className={classNames(
                isEqual(day, selectedDay) && 'text-white',
                !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-900',
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  'text-gray-400',
                isPast(day) && !isToday(day) && 'text-grey',
                isEqual(day, selectedDay) && isToday(day) && 'bg-black',
                isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                ' h-6 w-6 md:h-10 md:w-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg p-4 text-xs font-semibold'
              )}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>
                {format(day, 'dd')}
              </time>
            </button>

            {/* <div className="w-1 h-1 mx-auto mt-1">
              {meetings.some((meeting) =>
                isSameDay(parseISO(meeting.startDatetime), day)
              ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calender
