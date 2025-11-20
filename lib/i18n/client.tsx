'use client'

import { useEffect, useState } from 'react'
import i18n from './config'

export function useClientTranslation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Ne rendre le contenu traduit que côté client
  const { t, i18n: i18nInstance } = i18n

  return {
    t,
    i18n: i18nInstance,
    ready: mounted
  }
}