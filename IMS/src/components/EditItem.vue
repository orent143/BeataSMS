<template>
    <div>
      <h2>Edit Item</h2>
      <form @submit.prevent="submit">
        <input v-model="item.name" required />
        <input v-model="item.quantity" type="number" required />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['item'],
    methods: {
      submit() {
        this.$emit('save', this.item);
      }
    }
  }
  </script>
  