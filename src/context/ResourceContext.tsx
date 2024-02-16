'use client'
import { HttpMethod, SkillProps, TalentProps, TalentResponseProps } from '@/types'
import { useCaller } from '@/utils/API'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { usePaginationContext } from './PaginationContext'

export type ResourceContextType = {
  talents: TalentProps[]
  loading: boolean
  fetchResources: Function
  skills: SkillProps[]
  designations: String[]
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
  const [skills, setSkills] = useState<SkillProps[]>([])
  const [designations, setDesignations] = useState<String[]>([])
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

  const { execute: fetchDesignations } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: String[]) => {
      if (!resp) return
      setDesignations(resp)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  const { execute: fetchSkills } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: SkillProps[]) => {
      if (!resp) return
      setSkills(resp)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  useEffect(() => {
    fetchSkills('talents/skills')
    fetchDesignations('talents/designations')
  }, [])

  const defaultContext: ResourceContextType = {
    ...props,
    talents,
    loading,
    skills,
    designations,
    fetchResources
  }

  return (
    <ResourceContext.Provider value={defaultContext}>
      {children}
    </ResourceContext.Provider>
  )
}
