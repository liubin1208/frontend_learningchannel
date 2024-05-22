import { createRouter, createWebHistory } from 'vue-router';

// const routes = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('../views/index.vue'),
//     meta: {
//       title: '首页',
//       menuOrder: 1,
//     },
//   },
//   {
//     path: '/about',
//     name: 'about-index',
//     component: () => import('../views/about/index.vue'),
//     meta: {
//       title: '关于',
//       menuOrder: 10,
//     },
//   },
//   {
//     path: '/contact',
//     name: 'contact-index',
//     component: () => import('../views/contact/index.vue'),
//     meta: {
//       title: '联系',
//       menuOrder: 100,
//     },
//   },
// ];

// 自动生成routes
const pageModules = import.meta.glob('../views/**/page.js', {
  eager: true,
  import: 'default',
});
const compModules = import.meta.glob('../views/**/index.vue');
const routes = Object.entries(pageModules).map(([pagePath, config]) => {
  let path = pagePath.replace('../views', '').replace('/page.js', '');
  path = path || '/';

  const name = path.split('/').filter(Boolean).join('-') || 'index';
  const compPath = pagePath.replace('page.js', 'index.vue');
  return {
    path,
    name,
    component: compModules[compPath],
    meta: config,
  };
});

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
