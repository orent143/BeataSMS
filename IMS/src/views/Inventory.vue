<template>
  <div class="app-container">
    <div class="header-container">
      <h1 class="products-header">Product List</h1>
      <div class="header-actions">
        <div class="search-container">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search"
            class="search-bar"
          />
          <i class="fas fa-search search-icon"></i>
        </div>
        
        <!-- Filter Button with dropdown for status -->
        <div class="filter-container">
          <button class="filter-btn" @click="toggleFilterDropdown">
            <i class="fas fa-filter"></i>
          </button>
          <!-- Dropdown for status filter, shown when showFilterDropdown is true -->
          <div v-if="showFilterDropdown" class="dropdown">
            <!-- Status Filter Dropdown -->
            <select v-model="selectedStatus" class="filter-select" @change="filterItems">
              <option value="">All Statuses</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <!-- Add Product Button -->
        <button @click="toggleAddForm" class="add-product-btn">Add</button>
      </div>
    </div>

    <div class="main-content">
      <div class="inventory-container">
        <AddItem v-if="showAddForm" @add="addItem" :isVisible="showAddForm" @close="toggleAddForm" />
        <InventoryList
          :items="filteredItems"
          @edit="setEditItem"
          @remove="removeItem"
        />
        <EditItem v-if="editingItem" :item="editingItem" @save="saveItem" />
      </div>
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
      searchTerm: '',
      selectedStatus: '',  // Track the selected status filter
      showFilterDropdown: false,  // Toggle the visibility of the dropdown
      filteredItemsList: []  // Store filtered items
    };
  },
  computed: {
    ...mapState(['items']),
    filteredItems() {
      return this.filteredItemsList;
    }
  },
  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },
    addItem(item) {
      this.$store.dispatch('addItem', item);
      this.showAddForm = false;
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
    },
    toggleFilterDropdown() {
      this.showFilterDropdown = !this.showFilterDropdown;
    },
    filterItems() {
      let filtered = this.items;

      if (this.searchTerm) {
        filtered = filtered.filter(item =>
          item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      if (this.selectedStatus) {
        filtered = filtered.filter(item => item.status === this.selectedStatus);
      }

      this.filteredItemsList = filtered;

      // Close the dropdown after filtering
      this.showFilterDropdown = false;
    },

    // Close the dropdown when clicking outside
    closeFilterDropdown(event) {
      const dropdown = this.$refs.filterDropdown;
      if (dropdown && !dropdown.contains(event.target)) {
        this.showFilterDropdown = false;
      }
    }
  },
  created() {
    this.filterItems();  // Filter the items initially
    // Add event listener to close dropdown if clicked outside
    document.addEventListener('click', this.closeFilterDropdown);
  },
  beforeDestroy() {
    // Clean up event listener when the component is destroyed
    document.removeEventListener('click', this.closeFilterDropdown);
  }
}
</script>


<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  width: 80dvw;
  max-width: 80dvw;
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
  gap: 10px; /* Add space between header actions */
}

.main-content {
  display: flex; /* Use flexbox for layout */
  padding: 4px; /* Padding around the main content */
}

.inventory-container {
  flex-grow: 1; /* Allow it to fill available space */
  height: 40dvw; /* Adjust height */
  background-color: #dfdfdf; /* Background color */
  border-radius: 25px; /* Maintain border radius */
  overflow-y: auto; /* Enable scrolling if content overflows */
  margin-left: 5px; /* Space between the sidebar and inventory container */
  padding: 0; /* No padding */
}

.filter-btn {
  padding: 8px; /* Adjust padding */
  background-color: transparent; /* Transparent background */
  border: none; /* No border */
  cursor: pointer; /* Pointer cursor */
  font-size: 19px;
  color: #333; /* Icon color */
  transition: color 0.3s; /* Smooth transition for hover */
}

.filter-container {
  position: relative; /* Ensures the dropdown can be positioned inside */
}

.dropdown {
  position: absolute;
  top: 35px; /* Align the dropdown just below the button */
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 10;
  width: 8dvw; /* Width for dropdown */
}

.filter-select {
  padding: 8px;
  font-size: 14px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
}

.search-container {
  position: relative; /* Set position relative for the icon */
  margin-right: 3px; /* Space between search and button */
}

.search-icon {
  position: absolute; /* Position absolute to place it inside the input */
  right: 10px; /* Position it on the right */
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust for vertical centering */
  color: #333; /* Icon color */
  pointer-events: none; /* Prevent clicks on the icon */
}

.search-bar {
  padding: 8px 30px 8px 8px; /* Add right padding for icon space */
  border: 1px solid #94949400;
  border-radius: 10px;
  width: 130px;
  font-size: 14px; /* Adjust font size */
  font-weight: bold; /* Adjust font weight */
  color: #333; /* Change font color */
  background-color: #D9D9D9; /* Change background color */
}

.add-product-btn {
  padding: 8px 12px;
  background-color: #01A501; /* Button background */
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  width: 70px;
  cursor: pointer;
  font-size: 14px; /* Adjust font size */
  font-family: 'Arial', sans-serif; /* Change font family */
  font-weight: bold; /* Make font bold */
  text-align: center; /* Center the text */
}

.add-product-btn:hover {
  background-color: #00b32dad;
 /* Darker on hover */
}
</style>
