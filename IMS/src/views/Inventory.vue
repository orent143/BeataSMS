<template>
  <div class="app-container">
    <div class="header-container">
      <h1 class="products-header">Product List</h1>
      <div class="header-actions">
        <!-- Search Bar -->
        <div class="search-container">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search"
            class="search-bar"
            @input="filterItems"
          />
          <i class="fas fa-search search-icon"></i>
        </div>

        <!-- Filter Dropdown -->
        <div class="filter-container">
          <button class="filter-btn" @click="toggleFilterDropdown">
            <i class="fas fa-filter"></i>
          </button>
          <div v-if="showFilterDropdown" class="dropdown">
            <select v-model="selectedStatus" class="filter-select" @change="filterItems">
              <option value="">All Statuses</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <!-- Add Stock Button -->
        <button @click="toggleAddForm" class="add-product-btn">Add</button>
      </div>
    </div>

    <div class="main-content">
      <div class="inventory-container">
        <table class="stock-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Category</th>
              <th>Supplier</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredItems" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.quantity }}</td>
              <td>${{ product.unitPrice }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.supplier }}</td>
              <td>{{ product.status }}</td>
              <td>
                <button class="action-btn" @click="editItem(product)">Edit</button>
                <button class="action-btn" @click="removeItem(product.id)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add or Edit Item Form -->
    <add-product
      v-if="showAddForm"
      :isVisible="showAddForm"
      @close="toggleAddForm"
      @add="addItem"
    />

    <!-- Edit Item Form -->
    <edit-product
      v-if="showEditForm"
      :isVisible="showEditForm"
      :itemToEdit="selectedItem"
      @close="toggleEditForm"
      @update="updateItem"
    />
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue';
import EditProduct from '@/components/EditProduct.vue';

export default {
  components: {
    AddProduct,
    EditProduct
  },
  data() {
    return {
      searchTerm: '',
      selectedStatus: '',
      showFilterDropdown: false,
      showAddForm: false,
      showEditForm: false,
      selectedItem: null, // Store the item to be edited
      productItems: [
        { id: 1, name: "Espresso", quantity: 50, unitPrice: 60, category: "Beverages", supplier: "Coffee Co.", status: "In Stock" },
        { id: 2, name: "Cappuccino", quantity: 30, unitPrice: 50, category: "Beverages", supplier: "Coffee Co.", status: "In Stock" },
        { id: 3, name: "Croissant", quantity: 20, unitPrice: 50, category: "Bakery", supplier: "Bakery Inc.", status: "Low Stock" },
        { id: 4, name: "Bagel", quantity: 15, unitPrice: 20, category: "Bakery", supplier: "Bakery Inc.", status: "In Stock" },
        { id: 5, name: "Lemonade", quantity: 25, unitPrice: 75, category: "Beverages", supplier: "Beverage Co.", status: "In Stock" },
        { id: 6, name: "Cheese Sandwich", quantity: 10, unitPrice: 60, category: "Food", supplier: "Deli Foods", status: "Out of Stock" },
        { id: 7, name: "Cheese Sandwich", quantity: 10, unitPrice: 60, category: "Food", supplier: "Deli Foods", status: "Out of Stock" },
        // More items...
      ],
      filteredItems: []
    };
  },
  methods: {
    toggleFilterDropdown() {
      this.showFilterDropdown = !this.showFilterDropdown;
    },
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },
    toggleEditForm() {
      this.showEditForm = !this.showEditForm;
    },
    filterItems() {
      let filtered = this.productItems;

      if (this.searchTerm) {
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      if (this.selectedStatus) {
        filtered = filtered.filter(item => item.status === this.selectedStatus);
      }

      this.filteredItems = filtered;
    },
    editItem(item) {
      this.selectedItem = item;
      this.showEditForm = true;
    },
    updateItem(updatedItem) {
      const index = this.productItems.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.productItems.splice(index, 1, updatedItem);
      }
      this.filterItems();
      this.toggleEditForm();
    },
    removeItem(itemId) {
      this.productItems = this.productItems.filter(item => item.id !== itemId);
      this.filterItems();
    },
    addItem(newItem) {
      newItem.id = this.productItems.length + 1;
      this.productItems.push(newItem);
      this.filterItems();
      this.toggleAddForm();
    }
  },
  created() {
    this.filterItems();
  },
  watch: {
    searchTerm: 'filterItems',
    selectedStatus: 'filterItems'
  }
};
</script>
  
  
  <style scoped>
  /* Use same styles as Inventory page */
  .app-container {
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 80vw;
  margin-left: 40px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 18px;
  width: 95%;
}

.products-header {
  color: #000000;
  font-size: 30px;
  font-family: 'Arial', sans-serif;
  font-weight: 900;
}


.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.main-content {
    display: flex;
    padding: 4px;
  }
  
  .inventory-container {
  flex-grow: 1;
  height: 40vw;
  background-color: #dfdfdf;
  border-radius: 25px;
  overflow-y: auto;
  margin-left: 5px;
  padding: 0;
}
  
  /* Styling for the stock table */
  .stock-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .stock-table th,
  .stock-table td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .stock-table tbody{
    font-family: 'Arial', sans-serif;
  font-size: 15px;
  }

  .stock-table th {
    background-color: #f4f4f4;
    padding: 13px;
    font-weight: bold;
  }
 
  .search-container {
  position: relative;
  margin-right: 3px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  pointer-events: none;
}

.search-bar {
  padding: 8px 30px 8px 8px;
  border: 1px solid #94949400;
  border-radius: 10px;
  width: 130px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  background-color: #D9D9D9;
}

.filter-btn {
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 19px;
  color: #333;
  transition: color 0.3s;
}

.filter-container {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 35px;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 10;
  width: 8dvw;
}

.filter-select {
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}

.add-product-btn {
  padding: 8px 12px;
  background-color: #01A501;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  width: 70px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.add-product-btn:hover {
  background-color: #00b32dad;
}
/* Add a gap between the action buttons */
.action-btn {
  padding: 6px 9px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  transition: background-color 0.3s;
  margin-right: 10px;
}

.action-btn:hover {
  background-color: #0056b3;
}

.action-btn:active {  
  background-color: #004080;
}

  </style>
  