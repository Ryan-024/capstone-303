import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

const brand = {
  primary: '#7c5cff',
  secondary: '#22d3ee',
  accent: '#f472b6',
  success: '#34d399',
  warning: '#fbbf24',
  error: '#f87171',
  info: '#60a5fa'
}

export const vuetify = createVuetify({
  defaults: {
    VCard: { rounded: 'xl' },
    VBtn: { rounded: 'lg' }
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0e0f13',
          surface: '#161821',
          'surface-variant': '#1f2230',
          'on-surface-variant': '#c9cbd8',
          ...brand
        }
      },
      light: {
        dark: false,
        colors: {
          background: '#f6f7fb',
          surface: '#ffffff',
          'surface-variant': '#eef0f7',
          'on-surface-variant': '#3d4256',
          ...brand
        }
      }
    }
  }
})
