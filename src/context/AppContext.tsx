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
  const [subTalents, setSubTalents] = useState<TalentProps[]>([])

  const { execute: fetchHomeResources } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentResponseProps) => {
      if (!resp) return
      setHomeTalents(resp.talents)
      setSubTalents(resp.talents)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })


  useEffect(() => {
    fetchHomeResources('talents?perPage=1000')
  }, [])

  const defaultContext: AppContextType = {
    ...props,
    homeTalents,
  }

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  )
}
