import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Inventory from '@/views/Inventory.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/inventory', component: Inventory }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
