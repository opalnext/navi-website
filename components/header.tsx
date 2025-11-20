"use client"

import Link from "next/link"
import Image from "next/image"
import useTranslation from "@/lib/i18n"
import LanguageSwitcher from "./language-switcher"

export function Header() {
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image src="/navi-logo.png" alt="Navi Logo" fill className="object-contain invert" />
          </div>
          <span className="font-bold text-xl tracking-tight">Navi R3</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-foreground transition-colors">
            {t("header.nav_features")}
          </Link>
          <Link href="#hardware" className="hover:text-foreground transition-colors">
            {t("header.nav_hardware")}
          </Link>
          <Link href="#modules" className="hover:text-foreground transition-colors">
            {t("header.nav_modules")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
