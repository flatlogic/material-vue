import { test, expect } from '@playwright/test'

test('login tabs, dashboard charts, table controls, notifications, sidebar and logout survive migration', async ({ page }) => {
  const errors = []
  const messages = []
  const missing = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => {
    if (['error', 'warning'].includes(message.type())) messages.push(message.text())
  })
  page.on('response', response => {
    if (response.url().startsWith('http://127.0.0.1:4412/') && response.status() >= 400) {
      missing.push(response.url())
    }
  })
  await page.goto('./')
  await page.getByRole('tab', { name: 'New User', exact: true }).click()
  await expect(page.getByLabel('Full Name', { exact: true })).toBeVisible()
  await page.getByRole('tab', { name: 'LOGIN', exact: true }).click()
  await page.getByRole('button', { name: 'Login', exact: true }).click()
  await expect(page).toHaveURL(/#\/dashboard$/)
  await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible()
  await expect(page.locator('.main-header')).toHaveCSS('background-color', 'rgb(83, 109, 254)')
  await expect(page.getByText('Visits Today', { exact: true })).toHaveCSS('font-weight', '400')
  await expect(page.getByText('Visits Today', { exact: true })).toHaveCSS('color', 'rgb(110, 110, 110)')
  await expect(page.locator('.apexcharts-canvas').first()).toBeVisible()
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'test-results/dashboard.png', fullPage: false })

  const drawer = page.locator('.v-navigation-drawer')
  await page.locator('.main-header button').first().click()
  await expect(drawer).toHaveClass(/drawer-mini/)
  await page.locator('.main-header button').first().click()
  await expect(drawer).not.toHaveClass(/drawer-mini/)

  await drawer.getByRole('link', { name: 'Tables', exact: true }).click()
  const employee = page.locator('.employee-list')
  await expect(employee.locator('tbody')).toContainText('Joe James')
  await employee.getByLabel('Search', { exact: true }).fill('Joe James')
  await expect(employee.locator('tbody tr')).toHaveCount(1)
  await employee.getByLabel('Search', { exact: true }).fill('')
  await employee.getByRole('columnheader', { name: /Name/ }).click()
  await expect(employee.getByRole('columnheader', { name: /Name/ })).toHaveAttribute('aria-sort', 'ascending')
  const checkbox = employee.locator('tbody tr').first().getByRole('checkbox')
  await checkbox.check()
  await expect(checkbox).toBeChecked()

  await drawer.getByRole('link', { name: 'Notifications', exact: true }).click()
  await page.getByRole('button', { name: 'Info Message', exact: true }).click()
  await expect(page.locator('.Vue-Toastification__toast-body').filter({ hasText: 'New user feedback received' })).toBeVisible()
  await page.locator('.location-selector .bottom.left').click()
  await page.getByRole('button', { name: 'Success Message', exact: true }).click()
  await expect(page.locator('.Vue-Toastification__container.bottom-left')).toContainText('The item was shipped')

  await drawer.getByText('UI Elements', { exact: true }).click()
  await drawer.getByRole('link', { name: 'Charts', exact: true }).click()
  await expect(page.locator('.apexcharts-canvas').first()).toBeVisible()
  await drawer.getByRole('link', { name: 'Icons', exact: true }).click()
  await page.getByRole('tab', { name: 'Material Icons', exact: true }).click()
  await expect(page.getByText('mdi-access-point', { exact: true })).toBeVisible()
  await page.getByRole('tab', { name: 'Font Awesome', exact: true }).click()
  await expect(page.getByText('Bed', { exact: true })).toBeVisible()
  await expect(page.getByText('Bed', { exact: true }).locator('..').locator('i')).toHaveCSS('font-family', /FontAwesome/)

  await page.locator('.main-header button').last().click()
  await page.getByRole('button', { name: 'Sign Out', exact: true }).click()
  await expect(page).toHaveURL(/#\/login$/)
  await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible()
  expect(errors).toEqual([])
  expect(messages).toEqual([])
  expect(missing).toEqual([])
})

test('mobile login and temporary drawer preserve a usable dashboard', async ({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./')
  await page.getByRole('button', { name: 'Login', exact: true }).click()
  await expect(page).toHaveURL(/#\/dashboard$/)
  await page.locator('.main-header button').first().click()
  await expect(page.locator('.v-navigation-drawer')).not.toBeInViewport()
  await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible()
  await expect(page.locator('.apexcharts-canvas').first()).toBeVisible()
  const width = await page.evaluate(() => document.documentElement.scrollWidth)
  expect(width).toBeLessThanOrEqual(391)
  await page.screenshot({ path: 'test-results/dashboard-mobile.png', fullPage: false })
  expect(errors).toEqual([])
})
