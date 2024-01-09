'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/images/logo.svg'

const BrandLogo = () => {
  return (
    <Image alt='Brnad Logo' src={logo} className='h-8 w-fit cursor-pointer' priority />
  )
}

export default BrandLogo