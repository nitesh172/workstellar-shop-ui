'use client'
import {
  HttpMethod,
  LanguageProps,
  LanguagesResponseProps,
  TalentProps,
  TalentResponseProps,
  TranslationProps,
  TranslationsResponseProps,
} from '@/types'
import { useCaller } from '@/utils/API'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { toast } from 'react-hot-toast'

export type AppContextType = {
  homeTalents: TalentProps[]
  loading: boolean
  translate: Function
  lang: string
  setLang: (value: string) => void
  translations: any
  languages: LanguageProps[]
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
  const [translations, setTranslations] = useState<TranslationProps[]>([])
  const [languages, setLanguages] = useState<LanguageProps[]>([])
  const [lang, setLang] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const initialized = useRef(false)
  const [action, setAction] = useState<boolean>(false)

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

  const { execute: fetchLanguages } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: LanguagesResponseProps) => {
      if (!resp) return
      setLanguages(resp)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  const { execute: fetchTranslations } = useCaller({
    method: HttpMethod.GET,
    doneCb: (resp: TranslationsResponseProps) => {
      if (!resp) return
      setTranslations(resp)
    },
    errorCb: (failed: any) => {
      toast.error(failed)
    },
  })

  const translate = (translationKey: string, defaultValue: string) => {
    const translation = translations.find(
      (translation: TranslationProps) => translation.key === translationKey
    )

    const translationValue = translation?.translationValues.find((translationValue) => translationValue.language === lang)?.value

    return translationValue || defaultValue
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      setAction(true)
      let language = localStorage.getItem('workstellarLanguage')
      if (language) {
        setLang(language)
        localStorage.setItem('workstellarLanguage', language)
      } else {
        let defaultLang = 'dk-uk'
        setLang(defaultLang)
        localStorage.setItem('workstellarLanguage', defaultLang)
      }
      fetchLanguages('translation/languages/all')
      fetchTranslations('translation')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLoading(true)
    fetchHomeResources('talents?perPage=1000')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const defaultContext: AppContextType = {
    ...props,
    homeTalents,
    loading,
    translate,
    lang,
    setLang,
    translations,
    languages,
  }

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  )
}
