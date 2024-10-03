<template>
    <div>
      <header class="inventory-header">
        <h1>Orders</h1>
      </header>
      <OrderList :orders="orders" @delete-order="deleteOrder" />
    </div>
  </template>
  
  <script>
  import OrderList from '@/components/OrderList.vue';
  
  export default {
    components: { OrderList },
    data() {
      return {
        orders: [
          { id: 1, customer: 'John Doe', status: 'Pending' },
          { id: 2, customer: 'Jane Smith', status: 'Completed' },
          { id: 3, customer: 'Bob Johnson', status: 'Shipped' }
        ]
      };
    },
    methods: {
      deleteOrder(orderId) {
        this.orders = this.orders.filter(order => order.id !== orderId);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  