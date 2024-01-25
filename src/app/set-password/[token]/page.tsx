import dynamic from 'next/dynamic'
const SetPasswordForm = dynamic(
  () => import('@/components/Blocks/auth/SetPasswordForm')
)
const AuthWrapper = dynamic(
  () => import('@/components/Blocks/auth/AuthWrapper')
)

const SetPassword = () => {
  return (
    <AuthWrapper>
      <SetPasswordForm />
    </AuthWrapper>
  )
}

export default SetPassword
