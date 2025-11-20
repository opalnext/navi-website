"use client"

import { Cpu, Zap, Activity } from "lucide-react"
import useTranslation from "@/lib/i18n"

export function HardwareOverview() {
  const { t } = useTranslation()
  const components = t("hardware.components") as any[]
  const icons = [Cpu, Activity, Zap]

  return (
    <section id="hardware" className="py-32 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4">{t("hardware.title")}</h2>
          <p className="text-muted-foreground max-w-xl">{t("hardware.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {components.map((comp, i) => {
            const Icon = icons[i]
            return (
              <div key={i} className="p-8 rounded-3xl bg-background border border-white/10 hover:border-white/20 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{comp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{comp.description}</p>
                <div className="font-mono text-xs text-white/40">{comp.specs}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
