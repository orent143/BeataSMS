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
        <!-- AddItem Form -->
        <AddItem v-if="showAddForm" @add="addItem" :isVisible="showAddForm" @close="toggleAddForm" />

        <!-- Inventory List -->
        <InventoryList
          :items="filteredItems"
          @remove="removeItem"
          @edit="toggleEditForm"
        />

        <!-- EditItem Form -->
        <EditItem
          v-if="showEditForm"
          :isVisible="showEditForm"
          :itemToEdit="selectedItem"
          @close="toggleEditForm"
          @update="updateItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddItem from '@/components/AddItem.vue';
import InventoryList from '@/components/InventoryList.vue';
import EditItem from '@/components/EditItem.vue'; // Import the EditItem component
import { mapState } from 'vuex';

export default {
  components: {
    AddItem,
    InventoryList,
    EditItem
  },
  data() {
    return {
      searchTerm: '',
      selectedStatus: '',
      showFilterDropdown: false,
      showAddForm: false,
      showEditForm: false,
      selectedItem: null, // Store the item to be edited
      filteredItemsList: [] // Store filtered items
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
    toggleEditForm() {
      this.showEditForm = !this.showEditForm;
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
    },
    editItem(item) {
      this.selectedItem = item;
      this.showEditForm = true; // Show the Edit Form
    },
    updateItem(updatedItem) {
      const index = this.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        this.$store.dispatch('updateItem', updatedItem); // Dispatch update action
        this.toggleEditForm(); // Close the form after updating
        this.filterItems(); // Reapply filtering after update
      }
    },
    removeItem(itemId) {
      this.$store.dispatch('removeItem', itemId); // Dispatch remove action
      this.filterItems(); // Reapply filtering after removal
    },
    addItem(item) {
      this.$store.dispatch('addItem', item); // Dispatch add action
      this.toggleAddForm(); // Close the form after adding
    }
  },
  created() {
    this.filterItems();  // Filter the items initially
  },
  watch: {
    searchTerm: 'filterItems',
    selectedStatus: 'filterItems'
  }
};
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
