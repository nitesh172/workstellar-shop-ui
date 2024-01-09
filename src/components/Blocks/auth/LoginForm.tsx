import Button from '@/components/Buttons/Button'
import CheckBox from '@/components/Input/CheckBox'
import TextField from '@/components/Input/TextField'
import { FormProps } from '@/types'
import React from 'react'

const LoginForm: React.FC<FormProps> = (props) => {
  const { setAuth } = props

  return (
    <div className="rounded-3xl border p-5 md:p-10 flex flex-col gap-10">
      <div className="text-2xl md:text-4xl font-bold">Login</div>
      <div className="flex flex-col gap-6">
        <TextField label="Email ID" placeholder="Johncooper@gmail.com" />
        <TextField label="Password" placeholder="Password" />
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          <CheckBox id="remeberme" label="Remember password" />
          <div className="text-[#1030EF] cursor-pointer" onClick={() => setAuth('forgotpassword')}>Forgot password?</div>
        </div>
      </div>
      <div className="flex flex-col min-[425px]:flex-row gap-4">
        <Button text="Submit" dark className='w-full min-[425px]:w-auto' />
        <Button text="Register" onClick={() => setAuth('register')} className='w-full min-[425px]:w-auto' />
      </div>
    </div>
  )
}

export default LoginForm
