import Button from '@/components/Buttons/Button'
import TextField from '@/components/Input/TextField'
import { FormProps } from '@/types'
import React from 'react'

const ForgotPasswordForm: React.FC<FormProps> = (props) => {
  const { setAuth } = props
  return (
    <div className="rounded-3xl border p-5 md:p-10 flex flex-col gap-10">
      <div className="text-2xl md:text-4xl font-bold">Forgot password?</div>
      <div className="flex flex-col gap-6">
        <TextField label="Enter your email ID" placeholder="Johncooper@gmail.com" />
      </div>
      <div className="flex flex-row gap-4">
        <Button text="Submit" dark />
      </div>
    </div>
  )
}

export default ForgotPasswordForm