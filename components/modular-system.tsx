"use client"

import useTranslation from "@/lib/i18n"

export function ModularSystem() {
  const { t } = useTranslation()
  return (
    <section id="modules" className="py-32 justify-items-center w-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{t("modules.title")}</h2>
          <p className="text-xl text-muted-foreground">{t("modules.subtitle")}</p>
        </div>

        <div className="gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="prose prose-invert">
              <p className="text-lg text-muted-foreground">
                {t("modules.intro_prefix")}
                <span className="font-mono text-white mx-2">{t("modules.ports")}</span>
                {t("modules.intro_suffix")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h4 className="font-bold mb-2">{t("modules.expansion_title")}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {(t("modules.expansion_list") as string[]).map((it, i) => (
                    <li key={i}>• {it}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h4 className="font-bold mb-2">{t("modules.how_title")}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {(t("modules.how_list") as string[]).map((it, i) => (
                    <li key={i}>{i + 1}. {it}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
