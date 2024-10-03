<template>
    <div :class="['sidebar', { 'collapsed': isCollapsed }]">
    <button @click="toggleSidebar" class="toggle-btn">
      <i :class="isCollapsed ? 'fas fa-angle-right' : 'fas fa-angle-left'"></i>
    </button>
    <h2 v-if="!isCollapsed" class="sidebar-title">
      <img 
        src="../assets/Cafe-Logo-Transparent-Background.png" 
        class="sidebar-logo" 
      />
      <span class="sidebar-title-text">Café Beata</span>
    </h2>
    
    <ul v-if="!isCollapsed" class="sidebar-list">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.path" class="sidebar-link" active-class="active-link">
          <i :class="link.icon"></i> {{ link.name }}
        </router-link>
      </li>
    </ul>

    <ul v-else class="sidebar-list">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.path" class="sidebar-link" active-class="active-link">
          <i :class="link.icon"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isCollapsed: false,
      links: [
        { name: 'Home', path: '/', icon: 'fas fa-home' },
        { name: 'Manage Inventory', path: '/inventory', icon: 'fas fa-box' },
        { name: 'Orders', path: '/orders', icon: 'fas fa-shopping-cart' },
        { name: 'Reports', path: '/reports', icon: 'fas fa-chart-line' },
        { name: 'Suppliers', path: '/suppliers', icon: 'fas fa-truck' },
        { name: 'Users', path: '/users', icon: 'fas fa-users' }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
</script>


<style scoped>
.sidebar {
  width: 200px; /* Default width */
  padding: 20px;
  background-color: #940094;
  border-right: 1px solid #ccc;
  height: 100vh; /* Full height */
  position: fixed; /* Keep it fixed */
  transition: width 0.3s ease; /* Smooth transition */
  box-shadow: 2px 0 10px rgba(216, 23, 255, 0.822); /* Elevation effect */
}

.sidebar-logo {
  width: 42%; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 0 auto; /* Center the logo */
  display: block; /* Ensure it's a block element */
}

.sidebar-title {
  text-align: center; /* Center align title text */
  margin-top: 5px; /* Adjust top margin */
margin-bottom: 30px; /* Adjust bottom margin */

}

.collapsed {
  width: 50px; /* Width when collapsed */
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px; /* Adjust size as needed */
  color: #fff; /* Icon color */
}


.sidebar-title-text {
  color: #fff; /* Title color */
  font-size: 25px;
  font-family: 'Verdana', sans-serif; /* Font style */
  margin-top: 10px; /* Space between logo and title text */
  display: block; /* Ensure title text is on a new line */
}

.sidebar-list {
  list-style-type: none; /* Remove bullet points */
  padding: 0; /* Remove default padding */
}

.sidebar-link {
  color: #b6b6b6; /* Link color */
  text-decoration: none;
  font-weight: 0;
  font-size: 17px;
  font-family: 'Arial', sans-serif;
  display: flex; /* Make links block elements */
  align-items: center; /* Center vertically */
  padding: 5px 10px; /* Spacing */
  margin: 15px 0; /* Spacing between links */
  transition: color 0.3s, border-color 0.3s; /* Smooth color transition */
}

.sidebar-link i {
  margin-right: 20px; /* Space between icon and text */
  font-size: 18px; /* Icon size */
  vertical-align: middle; /* Center align with text */
}

.sidebar-link:hover {
  color: #000000; /* Change link color on hover */
  border-color: #000000; /* Change border color on hover */

}

/* Highlight active link */
.active-link {
  color: #000000; /* Color for active link */
  font-weight: bold; /* Make active link bold */
  background-color: #ffffff !important;
  padding: 8px 5px !important;
  width: 100%;
  box-sizing:content-box; /* Include padding and borders in width */
  border: 2px solid #ffffff; /* Add border */
  border-radius: 4px; /* Optional: rounded corners */
}
.collapsed .sidebar-link {
  justify-content: center; /* Center the icon when collapsed */
}
</style>
.w3-blue, .w3-hover-blue:hover {
  color: #fff !important;
  background-color: #2196F3 !important;
}
.w3-padding {
  padding: 8px 16px !important;
}