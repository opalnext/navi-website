"use client"

import * as React from "react"
import useTranslation from "@/lib/i18n"

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useTranslation()

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const v = e.target.value as "en" | "fr"
    setLocale(v)
  }

  return (
    <div className={`inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2 py-1 ${className}`}>
      <select
        aria-label="Language"
        value={locale}
        onChange={onChange}
        className="bg-transparent text-sm font-medium text-muted-foreground appearance-none pr-4 pl-1"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
      <svg className="w-3 h-3 ml-2 text-muted-foreground" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M6 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default LanguageSwitcher
