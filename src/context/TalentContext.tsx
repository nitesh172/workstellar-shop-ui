'use client'
import {
  HttpMethod,
  TalentProps,
  TalentResponseProps,
  UserProps,
} from '@/types'
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

export type TalentContextType = {
  talents: TalentProps[]
}

const TalentContext: any = createContext<TalentContextType>(
  {} as TalentContextType
)
export type TalentProviderProps = {
  children?: ReactNode
}

export const useTalentContext = () => {
  return useContext<TalentContextType>(TalentContext)
}

export const TalentProvider = (props: TalentProviderProps) => {
  const { children } = props

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [path, setPath] = useState<string>('')
  const [currentUser, setCurrentUser] = useState<UserProps>()
  const [talents, setTalents] = useState<TalentProps[]>([])

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

  const { execute: fetchResources } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentResponseProps) => {
      if (!resp) return
      setTalents(resp.talents)
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
      fetchResources('talents')
      userToken && !!isAuthenticated && fetchUser('users/me')
    }
  }, [])

  const defaultContext: TalentContextType = {
    ...props,
    talents,
  }

  return (
    <TalentContext.Provider value={defaultContext}>
      {children}
    </TalentContext.Provider>
  )
}
