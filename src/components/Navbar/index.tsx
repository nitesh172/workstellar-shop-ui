'use client'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import React from 'react'
const BrandLogo = dynamic(() => import('@/components/Blocks/BrandLogo'))
const Menus = dynamic(() => import('@/components/Blocks/navbar/Menus'))
const Button = dynamic(() => import('../Buttons/Button'))

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className='py-11 md:py-12 flex flex-col xl:flex-row gap-9 xl:gap-0 justify-between'>
        <div className='flex flex-row gap-6 lg:gap-12 items-center'>
            <BrandLogo />
            <Menus />
        </div>
        <Button text="Hire resource" className="self-center px-5" onClick={() => router.push('/auth')} />
    </nav>
  )
}

export default Navbar