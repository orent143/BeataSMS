<template>
  <div>
    <h2>Suppliers</h2>
    <ul>
      <li v-for="supplier in suppliers" :key="supplier.id">
        {{ supplier.name }} - Contact: {{ supplier.contact }}
        <button @click="editSupplier(supplier.id)">Edit</button>
        <button @click="deleteSupplier(supplier.id)">Delete</button>
      </li>
    </ul>
    <button @click="addSupplier">Add Supplier</button>
  </div>
</template>

<script>
export default {
  props: {
    suppliers: {
      type: Array,
      required: true
    }
  },
  methods: {
    addSupplier() {
      // Logic to add a supplier
      console.log("Add supplier clicked");
    },
    editSupplier(supplierId) {
      // Logic to edit a supplier
      console.log("Edit supplier:", supplierId);
    },
    deleteSupplier(supplierId) {
      this.$emit('delete-supplier', supplierId);
    }
  }
}
</script>

<style scoped>
/* Add styles here if needed */
</style>
