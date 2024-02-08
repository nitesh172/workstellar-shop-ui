import { useAppContext } from '@/context/AppContext'
import { usePopper } from '@/hooks/use-popper'
import { useOnClickOutside } from '@/hooks/useOutsideClick'
import React, { useRef, useState } from 'react'

const LanguageDropdown = () => {
  const { setLang, lang, languages } = useAppContext()

  const [showDropDownOptions, setShowDropDownOptions] = useState(false)

  const ref = useRef<any>()

  const handleClickOutside = () => {
    setShowDropDownOptions(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  let [trigger, container] = usePopper({
    placement: 'bottom-end',
    strategy: 'fixed',
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  })

  return (
    <div
      ref={ref}
      className="flex flex-row gap-2 text-sm items-center relative z-50"
    >
      <div
        ref={trigger}
        className="flex flex-row gap-2 cursor-pointer"
        onClick={() => setShowDropDownOptions(!showDropDownOptions)}
      >
        <div className="uppercase">{lang}</div>
      </div>
      {showDropDownOptions && (
        <div
          ref={container}
          className="bg-white shadow-md border rounded-md flex flex-col"
        >
          {!!languages &&
            !!languages.length &&
            languages.map((language, index) => {
              return (
                <div
                  key={language.id}
                  className="flex flex-row gap-2 p-2 px-2.5 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setLang(language.code)
                    setShowDropDownOptions(false)
                    localStorage.setItem('workstellarLanguage', language.code)
                  }}
                >
                  <div className="uppercase">{language.code}</div>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default LanguageDropdown
