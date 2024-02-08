'use client'
import { useAppContext } from '@/context/AppContext'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Menus = () => {
  const router = useRouter()
  const path = usePathname()

  const { translate } = useAppContext()

  const menuList = [
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
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
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
  )
}

export default Menus
