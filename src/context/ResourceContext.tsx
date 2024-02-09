'use client'
import { HttpMethod, TalentProps, TalentResponseProps } from '@/types'
import { useCaller } from '@/utils/API'
import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { usePaginationContext } from './PaginationContext'

export type ResourceContextType = {
  talents: TalentProps[]
  loading: boolean
  fetchResources: Function
}

const ResourceContext: any = createContext<ResourceContextType>(
  {} as ResourceContextType
)
export type ResourceProviderProps = {
  children?: ReactNode
}

export const useResourceContext = () => {
  return useContext<ResourceContextType>(ResourceContext)
}

export const ResourceProvider = (props: ResourceProviderProps) => {
  const { children } = props

  const [talents, setTalents] = useState<TalentProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { setTotalCount, setTotalPages, setPage, setLimit, setIsLoading } =
    usePaginationContext()

  const { execute: fetchResources } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TalentResponseProps) => {
      if (!resp) return
      setTalents(resp.talents)
      setLoading(false)
      setPage(resp.currentPage)
      setLimit(resp.perPage)
      setTotalPages(resp.totalPage)
      setTotalCount(resp.totalItems)
      setIsLoading(false)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  const defaultContext: ResourceContextType = {
    ...props,
    talents,
    loading,
    fetchResources
  }

  return (
    <ResourceContext.Provider value={defaultContext}>
      {children}
    </ResourceContext.Provider>
  )
}
