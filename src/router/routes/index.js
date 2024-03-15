const routes = [
  {
    path: '/shopify-template',
    redirect: '/shopify-template/home',
  },
  {
    path: '/shopify-template/home',
    name: 'Home',
    component: () => import("@/views/index/index.vue"),
  },
  {
    path: '/shopify-template/it',
    name: 'IT',
    component: () => import("@/views/it/index.vue"),
  },
  {
    path: '/shopify-template/operations',
    name: 'Operations',
    component: () => import("@/views/operations/index.vue"),
  },
]

export default routes