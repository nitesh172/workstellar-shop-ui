import React from 'react'
import Calender from '../Calender'
import TextField from '../Input/TextField'
import Button from '../Buttons/Button'

const ScheduleMeeting = () => {
  return (
    <div className='px-4 md:px-10 py-6 bg-white shadow-2xl flex flex-col gap-6 rounded-2xl'>
        <div className='text-lg md:text-2xl font-semibold'>Let’s schedule meeting</div>
        <Calender />
        <TextField  label='Your mail ID' placeholder='Johncooper@gmail.com' />
        <Button text='Schedule meet' dark />
    </div>
  )
}

export default ScheduleMeeting