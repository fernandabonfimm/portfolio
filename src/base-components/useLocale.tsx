"use client"

import { use, useEffect, useState } from 'react'

type Lang = 'en' | 'pt' | ''

export default function useLocale() {
  const [lang, setLang] = useState<Lang>('')

  function setLanguage(l: Lang) {
    try {
      localStorage.setItem('lang', l)
    } catch (e) {
      // ignore
    }
    setLang(l)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLang(localStorage.getItem('lang') === 'pt' ? 'pt' : 'en')
    }
  }, [])

  return { lang, setLanguage }
}
