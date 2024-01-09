'use client'
import ContactDetailWithForm from '@/components/Blocks/ContactDetailWithForm'
import SubscriptionSection from '@/components/Blocks/SubscriptionSection'
import ForgotPasswordForm from '@/components/Blocks/auth/ForgotPasswordForm'
import LoginForm from '@/components/Blocks/auth/LoginForm'
import RegisterForm from '@/components/Blocks/auth/RegisterForm'
import React, { useState } from 'react'

const Auth = () => {
  const [auth, setAuth] = useState<string>('login')

  let Component

  switch (auth) {
    case 'login':
      Component = LoginForm
      break
    case 'register':
      Component = RegisterForm
      break
    case 'forgotpassword':
      Component = ForgotPasswordForm
      break

    default:
      Component = LoginForm
      break
  }

  return (
    <div>
      <ContactDetailWithForm id="auth">
        {Component && <Component setAuth={setAuth} />}
      </ContactDetailWithForm>
      <SubscriptionSection />
    </div>
  )
}

export default Auth
