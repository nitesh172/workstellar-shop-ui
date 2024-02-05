'use client'
import { HttpMethod, TalentProps, TalentResponseProps } from '@/types'
import { useCaller } from '@/utils/API'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-hot-toast'

export type AppContextType = {
  homeTalents: TalentProps[]
  loading: boolean
}

const AppContext: any = createContext<AppContextType>({} as AppContextType)
export type AppProviderProps = {
  children?: ReactNode
}

export const useAppContext = () => {
  return useContext<AppContextType>(AppContext)
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props

  const [homeTalents, setHomeTalents] = useState<TalentProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { execute: fetchHomeResources } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentResponseProps) => {
      if (!resp) return
      setHomeTalents(resp.talents)
      setLoading(false)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })


  useEffect(() => {
    setLoading(true)
    fetchHomeResources('talents?perPage=1000')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const defaultContext: AppContextType = {
    ...props,
    homeTalents,
    loading
  }

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  )
}
