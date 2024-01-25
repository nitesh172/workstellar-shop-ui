'use client'
import { ButtonProps } from '@/types'
import React, { useState } from 'react'

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className, isDisabled = false, onClick, type, dark = false, submitLoading} = props

  const [_loading, setLoading] = useState<boolean>(false)

  const handleOnClick = async () => {
    setLoading(true)
    onClick && (await onClick())
    setLoading(false)
  }

  return (
    <button
      type={type}
      disabled={isDisabled || submitLoading}
      className={`px-10 py-3 md:py-4 border border-black rounded-[40px] w-fit ${dark ? 'text-white bg-black' : 'text-black bg-transparent hover:bg-black hover:text-white duration-300' } ${className ? className : ''}`}
      onClick={handleOnClick}
    >
      {text}
    </button>
  )
}

export default Button
