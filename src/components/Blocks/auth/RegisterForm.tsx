'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const DropDown = dynamic(() => import('@/components/Dropdown/Dropdown'))
const TextField = dynamic(() => import('@/components/Input/TextField'))

const RegisterForm = () => {
  let userType = [
    {
      name: 'Individual',
      id: 1,
    },
    {
      name: 'Company',
      id: 2,
    },
  ]

  const router = useRouter()

  const navigateToLogin = () => router.push('/login')

  return (
    <div className="rounded-3xl border p-5 md:p-10 flex flex-col gap-10">
      <div className="text-2xl md:text-4xl font-bold">Registration</div>
      <div className="flex flex-col gap-6">
        <TextField
          label="Enter your email ID"
          placeholder="Johncooper@gmail.com"
        />
        <DropDown
          availableOptionKey="name"
          primary
          label="Select type"
          availableOptions={userType}
          setOption={() => {}}
        />
        <TextField label="Company name" placeholder="Vector Company" />
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <DropDown
            availableOptionKey="name"
            primary
            label="Country"
            availableOptions={userType}
            setOption={() => {}}
          />
          <DropDown
            availableOptionKey="name"
            primary
            label="State"
            availableOptions={userType}
            setOption={() => {}}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <DropDown
            availableOptionKey="name"
            primary
            className='flex-1'
            label="State"
            availableOptions={userType}
            setOption={() => {}}
          />
          <TextField
            label="Zipcode"
            placeholder="10001"
            className='flex-1'
          />
        </div>
      </div>
      <div className="flex flex-col min-[425px]:flex-row gap-4">
        <Button text="Register" dark className="w-full min-[425px]:w-auto" />
        <Button text="Login" onClick={navigateToLogin} className="w-full min-[425px]:w-auto" />
      </div>
    </div>
  )
}

export default RegisterForm
