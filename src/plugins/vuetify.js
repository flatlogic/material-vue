import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import config from '@/config'
import 'font-awesome/css/font-awesome.css'

export default createVuetify({
  components,
  directives,
  defaults: {
    VTextField: { variant: 'underlined' },
    VChip: { variant: 'flat' }
  },
  theme: {
    defaultTheme: 'light',
    themes: { light: { colors: config.light } }
  }
})
