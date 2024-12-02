<template>
  <div>
    <div class="list-header">
      <div class="header-item name-header">Name</div>
      <div class="header-item">Quantity</div>
      <div class="header-item">Unit Price</div>
      <div class="header-item">Category</div>
      <div class="header-item">Supplier</div>
      <div class="header-item">Status</div>
      <div class="header-item">Actions</div>
    </div>
    <ul class="list-items">
      <li v-for="item in items" :key="item.id" class="list-item">
        <div class="item-name">{{ item.name }}</div>
        <div class="item-quantity">{{ item.quantity }}</div>
        <div class="item-cost">{{ item.costPrice }}</div>
        <div class="item-category">{{ item.category }}</div>
        <div class="item-supplier">{{ item.supplier }}</div>
        <div class="item-status">{{ item.status }}</div>
        <div class="item-actions">
          <button class="action-btn" @click="editItem(item)">Edit</button>
          <button class="action-btn" @click="removeItem(item.id)">Remove</button>
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
  font-weight: bold;
}

.header-item {
  flex: 1;
  text-align: center;
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
  gap: 10px;
}

.action-btn {
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  transition: background-color 0.3s;
}

.action-btn:hover {
  background-color: #0056b3;
}

.action-btn:active {
  background-color: #004080;
}
</style>
