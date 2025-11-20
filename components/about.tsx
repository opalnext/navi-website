"use client"

import useTranslation from "@/lib/i18n"

export function About() {
  const { t } = useTranslation()

  const list: string[] = t("about.list") as unknown as string[]

  return (
    <section id="features" className="py-32 border-t border-white/5 w-full">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              {t("about.title_pre")} <br />
              <span className="text-muted-foreground">{t("about.title_highlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t("about.p1")}</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t("about.p2")}</p>

            <ul className="space-y-4 font-bold text-sm">
              {list.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="text-center relative z-10">
              <div className="w-120 h-120 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="destructured-view.png"
                  alt="Modular Gaming Mouse"
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-xs text-muted-foreground">{t("about.internal")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
