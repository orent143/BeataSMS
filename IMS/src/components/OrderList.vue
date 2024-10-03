<template>
    <div>
      <h2>Orders</h2>
      <ul>
        <li v-for="order in orders" :key="order.id">
          Order ID: {{ order.id }} - Customer: {{ order.customer }} - Status: {{ order.status }}
          <button @click="editOrder(order.id)">Edit</button>
          <button @click="deleteOrder(order.id)">Delete</button>
        </li>
      </ul>
      <button @click="addOrder">Add Order</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      orders: {
        type: Array,
        required: true
      }
    },
    methods: {
      addOrder() {
        // Add your logic to add an order (e.g., show a form)
        console.log("Add order clicked");
      },
      editOrder(orderId) {
        // Add your logic to edit an order
        console.log("Edit order:", orderId);
      },
      deleteOrder(orderId) {
        this.$emit('delete-order', orderId);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  