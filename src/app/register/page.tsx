import dynamic from 'next/dynamic'
const RegisterForm = dynamic(() => import('@/components/Blocks/auth/RegisterForm'))
const AuthWrapper = dynamic(
  () => import('@/components/Blocks/auth/AuthWrapper')
)

const Register = () => {
  return (
    <AuthWrapper>
      <RegisterForm />
    </AuthWrapper>
  )
}

export default Register
