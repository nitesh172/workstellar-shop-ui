import Button from '@/components/Buttons/Button'
import TextField from '@/components/Input/TextField'
import React from 'react'
import ContactDetailWithForm from '../ContactDetailWithForm'

const ContactSection = () => {
  return (
    <ContactDetailWithForm label='Contact us' id='Contact us'>
        <div className="rounded-3xl border p-5 md:p-10 flex flex-col gap-6">
          <TextField
            label="How long will the project last"
            placeholder="Week"
          />
          <TextField label="Full name" placeholder="Name" />
          <div className="flex flex-col xl:flex-row gap-6">
            <TextField label="Phone number" placeholder="Number" className='flex-1' />
            <TextField label="Mail ID" placeholder="Mail ID" className='flex-1' />
          </div>
          <TextField
            label="Choose type of skills you need"
            placeholder="React Native"
          />
          <TextField
            label="What commitment do you need"
            placeholder="Part time"
          />
          <TextField
            label="When should your new member of the team start?"
            placeholder="As soon as possible"
          />

          <Button text='Submit' dark />
        </div>
    </ContactDetailWithForm>
  )
}

export default ContactSection
