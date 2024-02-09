'use client'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import LanguageDropdown from '../LanguageDropdown'
import { useAppContext } from '@/context/AppContext'
const Button = dynamic(() => import('../Buttons/Button'))
const BrandLogo = dynamic(() => import('@/components/Blocks/BrandLogo'))
const Menus = dynamic(() => import('@/components/Blocks/navbar/Menus'))

const Navbar = () => {
  const router = useRouter()
  const [sideBar, setSidebar] = useState<boolean>(false)

  const { translate } = useAppContext()

  const path = usePathname()
  
  const menuList = [
    {
      id: 0,
      name: translate('_HOME_', 'Home'),
      url: '/',
      scrollID: 'Home',
    },
    {
      id: 1,
      name: translate('_RESOURCES_', 'Resources'),
      url: '/resources',
      scrollID: '',
    },
    {
      id: 2,
      name: translate('_PRICE_', 'Price'),
      url: '',
      scrollID: 'Price',
    },
    {
      id: 3,
      name: translate('_TESTIMONIALS_', 'Testimonials'),
      url: '/',
      scrollID: 'Testimonials',
    },
    {
      id: 4,
      name: translate('_CONTACT_US_', 'Contact us'),
      url: '/',
      scrollID: 'Contact us',
    },
  ]

  const scrollToDiv = (menu: {
    id: number
    name: string
    url: string
    scrollID: string
  }) => {
    toggle()
    if (menu.url && path !== '/') {
      router.push(menu.url)
      return setTimeout(() => {
        let element = document.getElementById(menu.scrollID)

        if (!element) return

        element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (menu.scrollID) {
      return setTimeout(() => {
        let element = document.getElementById(menu.scrollID)

        if (!element) return

        element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      return router.push(menu.url)
    }
  }

  const toggle = () => {
    setSidebar(!sideBar)
    document.body.style.overflow = sideBar ? 'auto' : 'hidden'
  }

  return (
    <nav className="py-11 md:py-12 flex flex-col xl:flex-row gap-9 xl:gap-0 justify-between">
      <div className="flex flex-row justify-between xl:justify-normal gap-6 lg:gap-12 items-center">
        <BrandLogo />
        <Menus />
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggle}
            className={`z-50 hamburger flex rotate-180 flex-col-reverse lg:hidden focus:outline-none ${
              sideBar ? 'open' : ''
            }`}
          >
            <div className="hamburger-top"></div>
            <div className="hamburger-middle"></div>
            <div className="hamburger-bottom"></div>
          </button>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-4 items-center self-center'>
        <LanguageDropdown />
        <Button
          text={translate('_HIRE_RESOURCE_', 'Hire resource')}
          className="px-5"
          onClick={() => router.push('/resources')}
        />
      </div>
      <div
        id="menu"
        className={`fixed top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-32 pl-12 space-y-3 z-30 text-lg text-black uppercase bg-white ${
          sideBar ? 'flex' : 'hidden'
        }`}
      >
        {menuList.map((menu) => (
          <div
            key={menu.id}
            onClick={() => scrollToDiv(menu)}
            className="text-black text-base cursor-pointer"
          >
            {menu.name}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
