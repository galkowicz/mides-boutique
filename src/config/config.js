import { lazy } from 'react'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import parseLanguages from 'base-shell/lib/utils/locale'

const config = {
  routes,
  locale: {
    locales,
    defaultLocale: parseLanguages(['en', 'de', 'ru'], 'en'),
    onError: (e) => {
      //console.warn(e)
      return
    },
  },
  theme: {
    themes,
    defaultThemeID: 'default',
    defaultIsDarkMode: false,
    defaultIsRTL: true, //change this to true for default Right to Left Language support
  },
  pages: {
    LandingPage: lazy(() => import('../pages/LandingPage/LandingPage')),
  },
}

export default config
