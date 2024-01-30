'use client'
import React from 'react'
import Menus from './Menu'
import Button from '../Buttons/Button'
import BrandLogo from '../Blocks/BrandLogo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { socialLink } from '@/utils/config'

const Footer = () => {
  const router = useRouter()
  return (
    <div className="px-8 md:px-16 lg:px-20 xl:px-24 min-[1920px]:px-60 py-6 md:pt-20 md:pb-12 bg-footerbg">
      <div className="flex flex-col gap-10 items-start md:items-center lg:flex-row justify-between mb-10 md:mb-20">
        <Menus />
        <Button text="Hire resource" onClick={() => router.push("/resources")} className="px-5" />
      </div>
      <div className="flex flex-col items-start md:items-center gap-8 mb-10 md:mb-20">
        <BrandLogo />
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2.5 items-center justify-start md:justify-center">
            {socialLink.map((link, index) => (
              <a key={index} href={link.link} target='_blank'>
                <Image
                  src={link.image}
                  className="w-[42px] h-[42px] cursor-pointer"
                  width={42}
                  height={42}
                  loading='lazy'
                  alt="social-link"
                />
              </a>
            ))}
          </div>
          <div className="text-lg text-black flex flex-col md:flex-row gap-2 md:gap-0">
            <div>needhelp@workstellar.com | </div>
            <div>+45 12 34 56 78</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-6">
          <div>Terms and service</div>
          <div>Privacy policy</div>
        </div>
        <div>© {new Date().getFullYear()} WORKSTELLAR</div>
      </div>
    </div>
  )
}

export default Footer
