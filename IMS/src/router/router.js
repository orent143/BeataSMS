import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Inventory from '@/views/Inventory.vue';
import Orders from '@/views/Orders.vue';
import Suppliers from '@/views/Suppliers.vue';
import Reports from '@/views/Reports.vue';
import Users from '@/views/Users.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/inventory', component: Inventory },
  { path: '/orders', component: Orders },
  { path: '/suppliers', component: Suppliers },
  { path: '/reports', component: Reports },
  { path: '/users', component: Users }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
