import { createGetRoutes, setupLayouts } from 'virtual:meta-layouts'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

import { useRouteStoreWidthOut } from '@/store/modules/route'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

export function setupRouter(app: App<Element>) {
  app.use(router)
  routeStore.setMenus(getRoutes())
}

export const getRoutes = createGetRoutes(router as any)

const routeStore = useRouteStoreWidthOut()

export default router
