'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Menus = () => {
  const router = useRouter()
  const path = usePathname()

  const menuList = [
    {
      id: 1,
      name: 'Resources',
      url: '/',
      scrollID: 'Resources',
    },
    {
      id: 2,
      name: 'Price',
      url: '',
      scrollID: 'Price',
    },
    {
      id: 3,
      name: 'Why us',
      url: '/',
      scrollID: 'Why us',
    },
    {
      id: 4,
      name: 'Testimonials',
      url: '/',
      scrollID: 'Testimonials',
    },
    {
      id: 6,
      name: 'Contact us',
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
