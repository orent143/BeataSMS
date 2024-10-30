<template>
  <div>
    <div class="list-header">
      <div class="header-item name-header">Name</div>
      <div class="header-item">Quantity</div>
      <div class="header-item">Cost Price</div>
      <div class="header-item">Category</div>
      <div class="header-item">Supplier</div>
      <div class="header-item">Status</div>
      <div class="header-item">Actions</div>
    </div>
    <ul class="list-items">
      <li v-for="item in items" :key="item.id" class="list-item">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-details">
          <div class="item-quantity">{{ item.quantity }}</div>
          <div class="item-cost">{{ item.costPrice }}</div>
          <div class="item-category">{{ item.category }}</div>
          <div class="item-supplier">{{ item.supplier }}</div>
          <div class="item-status">{{ item.status }}</div>
          <div class="item-actions">
            <button @click="editItem(item)">Edit</button>
            <button @click="removeItem(item.id)">Remove</button>
          </div>
        </div>
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

<style scoped>
.list-header {
  display: flex; /* Use flexbox for horizontal layout */
  padding: 13px; /* Add padding to the header */
}

.header-item {
  flex: 1; /* Equal width for all header items */
  font-weight: bold;
  text-align: center; /* Center text */
}

.name-header {
  flex: 4; /* Wider space for the name header */
}

.list-items {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* No padding */
  margin-right: 20px; /* Move the list to the right side */
}

.list-item {
  display: flex; /* Use flexbox for item layout */
  padding: 10px; /* Add padding to the list items */
  border-bottom: 1px solid #eee; /* Bottom border for item separation */
}

.item-name {
  flex: 2; /* Wider for the name */
  text-align: left; /* Align name to the left */
}

.item-details {
  display: flex; /* Use flexbox for details layout */
  flex: 1; /* Take remaining space */
  justify-content: space-between; /* Space details evenly */
}

.item-quantity,
.item-cost,
.item-category,
.item-supplier,
.item-status,
.item-actions {
  flex: 1; /* Equal width for all items */
  text-align: center; /* Center text */
}

.item-actions {
  display: flex;
  justify-content: center; /* Center actions */
  gap: 5px; /* Space between buttons */
}
</style>
