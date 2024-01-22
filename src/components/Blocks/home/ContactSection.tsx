'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const TextField = dynamic(() => import('@/components/Input/TextField'))
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const ContactDetailWithForm = dynamic(() => import('../ContactDetailWithForm'))

const ContactSection = () => {
  let workType = [
    {
      name: 'Part time',
      id: 1,
    },
    {
      name: 'Full time',
      id: 2,
    },
  ]

  let timeperiod = [
    {
      name: 'As soon as possible',
      id: 1,
    },
    {
      name: 'In a week',
      id: 2,
    },
    {
      name: 'In a month',
      id: 3,
    },
  ]

  return (
    <ContactDetailWithForm label="Contact us" id="Contact us">
      <div className="rounded-3xl border p-5 md:p-10 flex flex-col gap-6">
        <TextField label="How long will the project last" placeholder="Week" />
        <TextField label="Full name" placeholder="Name" />
        <div className="flex flex-col xl:flex-row gap-6">
          <TextField
            label="Phone number"
            placeholder="Number"
            className="flex-1"
          />
          <TextField label="Mail ID" placeholder="Mail ID" className="flex-1" />
        </div>
        <TextField
          label="Choose type of skills you need"
          placeholder="React Native"
        />
        <DropDown
          availableOptionKey="name"
          primary
          label="What commitment do you need"
          availableOptions={workType}
          setOption={() => {}}
        />
        <DropDown
          availableOptionKey="name"
          primary
          label="When should your new member of the team start?"
          availableOptions={timeperiod}
          setOption={() => {}}
        />

        <Button text="Submit" dark />
      </div>
    </ContactDetailWithForm>
  )
}

export default ContactSection
