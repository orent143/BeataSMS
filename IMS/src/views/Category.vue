<template>
  <div class="app-container">
    <div class="header-container">
      <h1 class="products-header">Categories</h1>
      <div class="header-actions">
        <!-- Search Bar -->
        <div class="search-container">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search"
            class="search-bar"
          />
          <i class="fas fa-search search-icon"></i>
        </div>

        <!-- Add Category Button -->
        <button @click="toggleAddForm" class="add-product-btn">Add</button>
      </div>
    </div>

    <div class="main-content">
      <div class="category-list">
        <AddCategory v-if="showAddForm" @add="addCategory" :isVisible="showAddForm" @close="toggleAddForm" />

        <!-- Categories Grid -->
        <div v-for="category in filteredCategories" :key="category.id" class="category-card">
          <h3>{{ category.name }}</h3>
          <button @click="setEditCategory(category)">Edit</button>
          <button @click="removeCategory(category.id)">Remove</button>
        </div>
      </div>

      <!-- Edit Category Form -->
      <EditCategory v-if="editingCategory" :category="editingCategory" @save="saveCategory" @close="toggleEditForm" />
    </div>
  </div>
</template>

<script>
import AddCategory from '@/components/AddCategory.vue';
import EditCategory from '@/components/EditCategory.vue';

export default {
  components: {
    AddCategory,
    EditCategory
  },
  data() {
    return {
      categories: [
        { id: 1, name: 'Hot Coffee' },
        { id: 2, name: 'Ice Coffee' },
        { id: 3, name: 'Juice' },
        { id: 4, name: 'Milk Tea' },
        { id: 5, name: 'Frappe' },
        { id: 6, name: 'Choco Drink' }
      ],
      showAddForm: false,
      editingCategory: null,
      searchTerm: ''
    };
  },
  computed: {
    filteredCategories() {
      return this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  },
  methods: {
    toggleAddForm() {
      this.showAddForm = !this.showAddForm;
    },
    addCategory(newCategory) {
      this.categories.push(newCategory);
      this.toggleAddForm(); // Close the form
    },
    setEditCategory(category) {
      this.editingCategory = { ...category };
    },
    saveCategory(updatedCategory) {
      const index = this.categories.findIndex(cat => cat.id === updatedCategory.id);
      if (index !== -1) {
        this.categories.splice(index, 1, updatedCategory);
      }
      this.editingCategory = null;
    },
    removeCategory(categoryId) {
      this.categories = this.categories.filter(cat => cat.id !== categoryId);
    }
  }
};
</script>

<style scoped>
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
  flex-direction: column;
  padding: 4px;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.category-card {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.category-card button {
  padding: 6px 12px;
  margin-top: 10px;
  background-color: #01a501;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.category-card button:hover {
  background-color: #00b32d;
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
  background-color: #d9d9d9;
}

.add-product-btn {
  padding: 8px 12px;
  background-color: #01a501;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 10px;
  width: 100px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.add-product-btn:hover {
  background-color: #00b32dad;
}
</style>
