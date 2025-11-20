"use client"

import Link from "next/link"
import { Github, Twitter } from "lucide-react"
import useTranslation from "@/lib/i18n"

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-white/10 bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          <div>
            <h4 className="font-bold mb-6">{t("footer.project")}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("footer.links.documentation")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("footer.links.files_3d")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("footer.links.schematics")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">{t("footer.madewith")}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  {t("footer.links.github")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
