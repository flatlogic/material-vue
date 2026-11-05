import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  workers: 1,
  use: {
    channel: 'chrome',
    baseURL: 'http://127.0.0.1:4412/material-vue/',
    viewport: { width: 1440, height: 1000 },
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4412 --strictPort --outDir ' + (process.env.PLAYWRIGHT_DOCS === '1' ? 'docs' : 'dist'),
    url: 'http://127.0.0.1:4412/material-vue/'
  }
})
