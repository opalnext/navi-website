import i18n from './config'

export function getServerTranslations(locale: string) {
  return {
    t: i18n.getFixedT(locale)
  }
}