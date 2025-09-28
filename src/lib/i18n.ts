import { addMessages, init, locale as i18nLocale } from 'svelte-i18n'
import en from './translations/en.json'
import ja from './translations/ja.json'

init({
  fallbackLocale: 'en',   // default locale
  initialLocale: 'en'    // will be overridden
})

addMessages('en', en)
addMessages('ja', ja)

export function setupI18n(locale: string = 'en') {
  i18nLocale.set(locale)
}