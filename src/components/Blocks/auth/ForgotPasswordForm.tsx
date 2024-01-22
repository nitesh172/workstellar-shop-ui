import React from 'react'
import dynamic from 'next/dynamic'
const Button = dynamic(() => import('@/components/Buttons/Button'))
const TextField = dynamic(() => import('@/components/Input/TextField'))

const ForgotPasswordForm = () => {
  return (
    <div className="rounded-3xl border p-5 md:p-10 flex flex-col gap-10">
      <div className="text-2xl md:text-4xl font-bold">Forgot password?</div>
      <div className="flex flex-col gap-6">
        <TextField
          label="Enter your email ID"
          placeholder="Johncooper@gmail.com"
        />
      </div>
      <div className="flex flex-row gap-4">
        <Button text="Submit" dark />
      </div>
    </div>
  )
}

export default ForgotPasswordForm
