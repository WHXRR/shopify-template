
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'
export const router = createRouter({
  history: createWebHistory(),
  // 应该添加到路由的初始路由列表。
  routes,
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
});

export function setupRouter(app) {
  app.use(router);
}
