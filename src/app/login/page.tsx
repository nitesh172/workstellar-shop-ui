import dynamic from 'next/dynamic'
const LoginForm = dynamic(() => import('@/components/Blocks/auth/LoginForm'))
const AuthWrapper = dynamic(
  () => import('@/components/Blocks/auth/AuthWrapper')
)

const Login = () => {
  return (
    <AuthWrapper>
      <LoginForm />
    </AuthWrapper>
  )
}

export default Login
