import { TextFieldProps } from '@/types'
import React from 'react'

const TextField: React.FC<TextFieldProps> = (props) => {
  const { label, placeholder, className } = props
  return (
    <div className={`relative bg-white rounded-lg border ${className ? className : ''}`}>
      <label
        htmlFor=""
        className="absolute text-xs font-semibold z-10 left-4 -top-[22%] bg-white p-1"
      >
        {label}
      </label>
      <input
        type="text"
        className="outline-none rounded-lg w-full p-5"
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField
