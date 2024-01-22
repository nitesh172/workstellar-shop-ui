import dynamic from 'next/dynamic'
const ForgotPasswordForm = dynamic(
  () => import('@/components/Blocks/auth/ForgotPasswordForm')
)
const AuthWrapper = dynamic(
  () => import('@/components/Blocks/auth/AuthWrapper')
)

const ForgotPassword = () => {
  return (
    <AuthWrapper>
      <ForgotPasswordForm />
    </AuthWrapper>
  )
}

export default ForgotPassword
