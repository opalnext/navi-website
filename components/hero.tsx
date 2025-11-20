"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu } from "lucide-react"
import useTranslation from "@/lib/i18n"

export function Hero() {
  const { t } = useTranslation()
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden grid-bg">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Navi R3
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-4 font-light">
          {t("hero.subtitle")}
        </p>

        <p className="text-lg text-muted-foreground max-w-xl mb-10">
          {t("hero.lead")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Button size="lg" className="rounded-full px-8 h-12 text-base">
            {t("hero.cta_primary")} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base border-white/20 hover:bg-white/5 bg-transparent"
          >
            {t("hero.cta_secondary")} <Cpu className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* 3D Placeholder */}
        <div className="relative w-full max-w-4xl aspect-[16/9] bg-gradient-to-b from-white/5 to-transparent rounded-t-3xl border-t border-x border-white/10 flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="text-center">
            <div className="w-64 h-40 bg-white/5 rounded-2xl border border-white/10 mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
              <span className="font-mono text-xs text-muted-foreground">[ 3D RENDER PLACEHOLDER ]</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">Navi R3 - Core Unit</p>
          </div>
        </div>
      </div>
    </section>
  )
}
