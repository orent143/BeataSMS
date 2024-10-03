<template>
    <div>
      <h2>Add Item</h2>
      <form @submit.prevent="submit">
        <input v-model="name" placeholder="Item Name" required />
        <input v-model="quantity" type="number" placeholder="Quantity" required />
        <button type="submit">Add Item</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        quantity: 0
      };
    },
    methods: {
      submit() {
        const newItem = {
          id: Date.now(),
          name: this.name,
          quantity: this.quantity
        };
        this.$emit('add', newItem);
        this.name = '';
        this.quantity = 0;
      }
    }
  }
  </script>
  