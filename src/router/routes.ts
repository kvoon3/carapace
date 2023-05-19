import type { RouteConfig } from 'vue-router'

export const routes: RouteConfig[] = [
  {
    path: '/',
    // component: () => import('~/App.vue'),
    component: () => import('~/App.vue'),
  },
  {
    path: '/test',
    component: () => import('~/pages/testPage.vue'),
  },
]
