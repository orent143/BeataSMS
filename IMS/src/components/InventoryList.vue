<template>
    <div>
      <h2>Inventory List</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.quantity }}
          <button @click="editItem(item)">Edit</button>
          <button @click="removeItem(item.id)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['items'],
    methods: {
      editItem(item) {
        this.$emit('edit', item);
      },
      removeItem(itemId) {
        this.$emit('remove', itemId);
      }
    }
  }
  </script>
  