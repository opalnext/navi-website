'use client'

import { useTranslation as useReactTranslation } from 'react-i18next'
import { useClientTranslation } from './client'

export function useTranslation() {
  const { t, i18n } = useReactTranslation()
  const { ready } = useClientTranslation()

  return {
    t,
    i18n,
    ready
  }
}