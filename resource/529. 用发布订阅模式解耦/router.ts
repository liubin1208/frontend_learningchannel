import { createRouter, createWebHashHistory } from 'vue-router';
import eventEmitter from './eventEmitter';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

eventEmitter.on('API:UN_AUTH', () => {
  router.push('/login');
});

export default router;
