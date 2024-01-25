import { TextFieldProps } from '@/types'
import React from 'react'

const TextField: React.FC<TextFieldProps> = (props) => {
  const {
    label,
    placeholder,
    className,
    name,
    type,
    onChange,
    onBlur,
    style,
    value,
    error,
    touched
  } = props

  return (
    <div className='flex flex-col gap-2 flex-1'>
      <div
        style={style}
        className={`relative bg-white rounded-lg border ${
          className ? className : ''
        }`}
      >
        <label
          htmlFor=""
          className="absolute text-xs font-semibold z-10 left-3 -top-[22%] bg-white p-1"
        >
          {label}
        </label>
        <input
          name={name}
          type={type}
          value={(value && name) && !!value[name] ? value[name] : ''}
          onBlur={onBlur}
          onChange={(e) => onChange && onChange(e)}
          className="outline-none  text-base rounded-lg w-full p-5"
          autoComplete='none'
          placeholder={placeholder}
        />
      </div>
      {name && error && touched && error[name] !== '' ? (
        <span className="text-xs text-[#F04438] px-2 block">{touched[name] && error[name]}</span>
      ) : null}
    </div>
  )
}

export default TextField
