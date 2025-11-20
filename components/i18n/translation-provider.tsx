'use client'

import { ReactNode } from 'react'
import { useClientTranslation } from '@/lib/i18n/client'

interface TranslationProviderProps {
  children: ReactNode
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const { ready } = useClientTranslation()

  // Afficher un placeholder côté serveur jusqu'à ce que le client soit prêt
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  return <>{children}</>
}