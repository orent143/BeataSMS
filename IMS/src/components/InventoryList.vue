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
            <button class="action-btn" @click="editItem(item)">Edit</button>
            <button class="action-btn" @click="removeItem(item.id)">Remove</button>
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
  display: flex;
  padding: 13px;
  background-color: #f0f0f0;
}

.header-item {
  flex: 1;
  font-weight: bold;
  text-align: center;
}

.name-header {
  flex: 4;
}

.list-items {
  list-style-type: none;
  padding: 0;
  font-family: 'Arial', sans-serif;
  font-size: 15px;
}

.list-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.item-details {
  display: flex;
  flex: 1.5;
  justify-content: space-between;
}

.item-name,
.item-quantity,
.item-cost,
.item-category,
.item-supplier,
.item-status,
.item-actions {
  flex: 1;
  text-align: center;
}

.item-actions {
  display: flex;
  justify-content: center;
  gap: 10px; /* Increased space between buttons */
}

.action-btn {
  padding: 6px 12px; /* Adjust padding for buttons */
  background-color: #007bff; /* Button background color */
  color: white; /* Text color */
  border: none; /* Remove border */
  border-radius: 10px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  font-size: 13px;
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  transition: background-color 0.3s; /* Smooth transition */
}

.action-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.action-btn:active {
  background-color: #004080; /* Even darker on active */
}
</style>
