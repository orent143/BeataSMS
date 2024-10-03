<template>
    <div>
      <h2>Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - Role: {{ user.role }}
          <button @click="editUser(user.id)">Edit</button>
          <button @click="deleteUser(user.id)">Delete</button>
        </li>
      </ul>
      <button @click="addUser">Add User</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    methods: {
      addUser() {
        // Logic to add a user
        console.log("Add user clicked");
      },
      editUser(userId) {
        // Logic to edit a user
        console.log("Edit user:", userId);
      },
      deleteUser(userId) {
        this.$emit('delete-user', userId);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  