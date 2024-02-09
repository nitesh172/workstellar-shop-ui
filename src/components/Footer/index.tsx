'use client'
import React from 'react'
import Menus from './Menu'
import Button from '../Buttons/Button'
import BrandLogo from '../Blocks/BrandLogo'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/context/AppContext'

const Footer = () => {
  const router = useRouter()
  const { translate } = useAppContext()

  return (
    <div className="px-8 md:px-16 lg:px-20 xl:px-24 min-[1920px]:px-60 py-6 md:pt-20 md:pb-12 bg-footerbg">
      <div className="flex flex-col gap-10 items-start md:items-center lg:flex-row justify-between mb-10 md:mb-20">
        <Menus />
        <Button
          text={translate('_HIRE_RESOURCE_', 'Hire resource')}
          onClick={() => router.push('/resources')}
          className="px-5"
        />
      </div>
      <div className="flex flex-col items-start md:items-center gap-8 mb-10 md:mb-20">
        <BrandLogo />
        <div className="flex flex-col gap-2">
          <div className="text-lg text-black flex flex-col md:flex-row gap-2 md:gap-0">
            <div>hello@workstellar.com | </div>
            <div>+45 27853598</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-between">
        <div className="flex flex-col md:flex-row gap-6">
          <div>{translate('_TERM_AND_SERVICES_', 'Terms and services')}</div>
          <div>{translate('_PRIVACY_POLICY_', 'Privacy policy')}</div>
        </div>
        <div>© {new Date().getFullYear()} WORKSTELLAR</div>
      </div>
    </div>
  )
}

export default Footer
