'use client'
import { HttpMethod, UserProps } from '@/types'
import { useCaller } from '@/utils/API'
import { getCookie } from 'cookies-next'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-hot-toast'

export type AuthContextType = {
  setIsAuthenticated: (isAuthenticated: boolean) => void
  isAuthenticated: boolean | null
  fetchUser: Function
  currentUser?: UserProps
  path: string
  setPath: (value: string) => void
}

const AuthContext: any = createContext<AuthContextType>({} as AuthContextType)
export type AuthProviderProps = {
  children?: ReactNode
}

export const useAuthContext = () => {
  return useContext<AuthContextType>(AuthContext)
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [path, setPath] = useState<string>('')
  const [currentUser, setCurrentUser] = useState<UserProps>()

  const { execute: fetchUser } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: UserProps) => {
      if (!resp) return
      setCurrentUser(resp)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  useEffect(() => {
    const userToken = getCookie('workStellarToken')

    console.log(userToken, isAuthenticated)

    if (!userToken) {
      setIsAuthenticated(false)
    } else {
      setIsAuthenticated(true)
      userToken && !!isAuthenticated && fetchUser('users/me')
    }
  }, [isAuthenticated])

  const defaultContext: AuthContextType = {
    ...props,
    isAuthenticated: isAuthenticated,
    setIsAuthenticated,
    currentUser,
    fetchUser,
    setPath,
    path,
  }

  return (
    <AuthContext.Provider value={defaultContext}>
      {children}
    </AuthContext.Provider>
  )
}
