"use client"

import en from "@/locales/en.json"
import fr from "@/locales/fr.json"
import * as React from "react"

type Locale = "en" | "fr"

const LOCALES: Record<Locale, any> = {
  en,
  fr,
}

const STORAGE_KEY = "locale"
const EVENT_NAME = "i18n:locale-change"

function detectLocale(): Locale {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "en" || stored === "fr") return stored
    const lang = navigator.language || navigator.languages?.[0] || "en"
    if (lang.startsWith("fr")) return "fr"
  }
  return "en"
}

function setLocaleGlobal(newLocale: Locale) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(STORAGE_KEY, newLocale)
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { locale: newLocale } }))
}

export function useTranslation() {
  const [locale, setLocale] = React.useState<Locale>(() => detectLocale())

  React.useEffect(() => {
    function onChange(e: Event) {
      const ev = e as CustomEvent
      const l = ev?.detail?.locale
      if (l === "en" || l === "fr") setLocale(l)
    }

    // listen to global changes
    window.addEventListener(EVENT_NAME, onChange as EventListener)
    // also listen to storage for cross-tab changes
    function onStorage(ev: StorageEvent) {
      if (ev.key === STORAGE_KEY && (ev.newValue === "en" || ev.newValue === "fr")) {
        setLocale(ev.newValue as Locale)
      }
    }
    window.addEventListener("storage", onStorage)

    return () => {
      window.removeEventListener(EVENT_NAME, onChange as EventListener)
      window.removeEventListener("storage", onStorage)
    }
  }, [])

  function t(path: string) {
    const parts = path.split(".")
    const dict = LOCALES[locale] || LOCALES.en
    let cur: any = dict
    for (const p of parts) {
      cur = cur?.[p]
      if (cur == null) break
    }
    if (cur == null) {
      // fallback to english
      let c: any = LOCALES.en
      for (const p of parts) {
        c = c?.[p]
        if (c == null) break
      }
      return c ?? path
    }
    return cur
  }

  // Expose the global setter which writes localStorage and dispatches an event;
  // this hook updates its local state when that event or a storage change occurs.
  return { t, locale, setLocale: setLocaleGlobal }
}

export default useTranslation
