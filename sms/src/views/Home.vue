<template>
    <div class="app-container">
     <div class="header-container">
       <h1 class="products-header">Dashboard</h1>
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
       
         <button @click="toggleAddForm" class="add-product-btn">Add</button>
       </div>
     </div>
  
     <div class="main-content">
       <div class="dashboard-container">
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
  
  .dashboard-container {
  flex-grow: 1; /* Allow it to fill available space */
  height: 40dvw; /* Adjust height */
  background-color: #dfdfdf; /* Background color */
  border-radius: 25px; /* Maintain border radius */
  overflow-y: auto; /* Enable scrolling if content overflows */
  margin-left: 5px; /* Space between the sidebar and inventory container */
  padding: 0; /* No padding */
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
  background-color: #00b32dad; /* Darker on hover */
  }
  </style>
  