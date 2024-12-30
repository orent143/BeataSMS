import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Inventory from '@/views/Inventory.vue';
import Orders from '@/views/Orders.vue';
import CreateOrder from '@/views/CreateOrder.vue';
import Reports from '@/views/Reports.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/create-orders',
    name: 'Create Order',
    component: CreateOrder
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
