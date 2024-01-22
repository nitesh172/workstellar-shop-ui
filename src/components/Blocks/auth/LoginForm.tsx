'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const CheckBox = dynamic(() => import('@/components/Input/CheckBox'))
const TextField = dynamic(() => import('@/components/Input/TextField'))

const LoginForm = () => {
  const router = useRouter()

  const navigateToRegister = () => router.push('/register')
  const navigateToForgotPassword = () => router.push('/forgot-password')

  return (
    <div className="rounded-3xl border p-5 md:p-10 flex flex-col gap-10">
      <div className="text-2xl md:text-4xl font-bold">Login</div>
      <div className="flex flex-col gap-6">
        <TextField label="Email ID" placeholder="Johncooper@gmail.com" />
        <TextField label="Password" placeholder="Password" />
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <CheckBox id="remeberme" label="Remember password" />
          <div
            onClick={navigateToForgotPassword}
            className="text-[#1030EF] cursor-pointer"
          >
            Forgot password?
          </div>
        </div>
      </div>
      <div className="flex flex-col min-[425px]:flex-row gap-4">
        <Button text="Submit" dark className="w-full min-[425px]:w-auto" />
        <Button
          text="Register"
          onClick={navigateToRegister}
          className="w-full min-[425px]:w-auto"
        />
      </div>
    </div>
  )
}

export default LoginForm
