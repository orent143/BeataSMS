<template>
  <div class="app-container">
    <div class="header-container">
      <h1 class="products-header">Products</h1>
      <div class="header-actions">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search Products"
          class="search-bar"
        />
        <button @click="toggleAddForm" class="add-product-btn">Add Product</button>
      </div>
    </div>
    <div class="inventory-container">
      <AddItem v-if="showAddForm" @add="addItem" />
      <InventoryList
        :items="filteredItems"
        @edit="setEditItem"
        @remove="removeItem"
      />
      <EditItem v-if="editingItem" :item="editingItem" @save="saveItem" />
    </div>
  </div>
</template>

<script>
import AddItem from '@/components/AddItem.vue';
import InventoryList from '@/components/InventoryList.vue';
import EditItem from '@/components/EditItem.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AddItem,
    InventoryList,
    EditItem
  },
  data() {
    return {
      editingItem: null,
      showAddForm: false,
      searchTerm: ''
    };
  },
  computed: {
    ...mapState(['items']),
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
  methods: {
    addItem(item) {
      this.$store.dispatch('addItem', item);
      this.showAddForm = false; // Hide the form after adding
    },
    toggleAddForm() {
      this.showAddForm = !this.showAddForm; // Toggle form visibility
    },
    removeItem(itemId) {
      this.$store.dispatch('removeItem', itemId);
    },
    setEditItem(item) {
      this.editingItem = { ...item };
    },
    saveItem(updatedItem) {
      this.$store.dispatch('editItem', updatedItem);
      this.editingItem = null;
    }
  }
}
</script>

<style scoped>
.app-container {
  margin-left: 30px; /* Remove left margin */
  width: 100%; /* Set width to 100% */
  max-width: 1200px; /* Set a maximum width */
  display: flex;
  flex-direction: column;
}

.header-container {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: space-between; /* Space between items */
  margin-bottom: 15px; /* Space below the header */
  width: 100%; /* Set width to 100% */
  max-width: 1200px; /* Set a maximum width */
}

.products-header {
  color: #000000;
  font-size: 30px;
  font-family: 'Arial', sans-serif;
  font-weight: 900;
}

.header-actions {
  display: flex;
  align-items: center; /* Align items vertically */
}

.search-bar {
  padding: 8px;
  margin-right: 10px; /* Space between search bar and button */
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-product-btn {
  padding: 8px 12px;
  width: 121%;
  background-color: #e414ff; /* Green background */
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-product-btn:hover {
  background-color: #000000; /* Darker green on hover */
}

.inventory-container {
  flex-grow: 1; /* Allow it to fill available space */
  padding: 20px; /* Padding around the content */
  width: 121%;
  height: calc(100vh - 80px); /* Adjust height to full viewport height minus header and any other fixed height */
  background-color: #dfdfdf; /* Background color */
  border-radius: 25px; /* Maintain border radius */
  overflow-y: auto; /* Enable scrolling if content overflows */
}
.sidebar {
  width: 250px; /* Fixed width for sidebar */
  background-color: #f0f0f0; /* Example sidebar color */
}

.collapsed .inventory-container {
  margin-left: 50px;
}
</style> 