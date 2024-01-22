import React from 'react'
import dynamic from 'next/dynamic'
import { AuthWrapperProps } from '@/types'
const ContactDetailWithForm = dynamic(() => import('../ContactDetailWithForm'))
const SubscriptionSection = dynamic(() => import('../SubscriptionSection'))

const AuthWrapper: React.FC<AuthWrapperProps> = (props) => {
  const { children } = props
  return (
    <div>
      <ContactDetailWithForm id="auth">{children}</ContactDetailWithForm>
      <SubscriptionSection />
    </div>
  )
}

export default AuthWrapper
