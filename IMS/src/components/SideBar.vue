<template>
  <div :class="['sidebar', { 'collapsed': isCollapsed }]">
    <h2 v-if="!isCollapsed" class="sidebar-title">
      <img src="../assets/Cafe-Logo-Transparent-Background.png" class="sidebar-logo" />
      <span class="sidebar-title-text">Café Beata</span>
    </h2>

    <ul v-if="!isCollapsed" class="sidebar-list">
      <li v-for="(link, index) in links" :key="index">
        <!-- Manage Inventory - Don't apply active link styling -->
        <router-link
          v-if="link.submenu"
          :to="link.path"
          class="sidebar-link"
          @click="toggleSubmenu(link)"
        >
          <i :class="link.icon"></i> {{ link.name }}
        </router-link>
        <router-link
          v-else
          :to="link.path"
          class="sidebar-link"
          active-class="active-link"
        >
          <i :class="link.icon"></i> {{ link.name }}
        </router-link>

        <!-- Submenu for Manage Inventory -->
        <ul v-if="link.submenu && link.isOpen" class="submenu">
          <li v-for="(subLink, subIndex) in link.submenu" :key="subIndex">
            <router-link
              :to="subLink.path"
              class="sidebar-link"
              active-class="active-link"
            >
              <i :class="subLink.icon"></i> {{ subLink.name }}
            </router-link>
          </li>
        </ul>
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
        {
          name: 'Manage Inventory',
          path: '#',
          icon: 'fas fa-box',
          submenu: [
            { name: 'Products', path: '/inventory', icon: 'fas fa-cogs' },
            { name: 'Stocks', path: '/stock', icon: 'fas fa-cogs' }
          ],
          isOpen: false // Keep track of the submenu's open state
        },
        { name: 'Sales', path: '/sales', icon: 'fas fa-cash-register' },
        { name: 'Suppliers', path: '/suppliers', icon: 'fas fa-truck' },
        { name: 'Categories', path: '/category', icon: 'fas fa-th-list' },
        { name: 'Reports', path: '/reports', icon: 'fas fa-chart-line' }
      ]
    };
  },
  methods: {
    toggleSubmenu(link) {
      link.isOpen = !link.isOpen;
    }
  }
};
</script>


<style scoped>
.sidebar {
  width: 200px; /* Default width */
  padding: 20px;
  background-color: #FF32BA;
  height: 100vh; /* Full height */
  position: fixed; /* Keep it fixed */
  transition: width 0.3s ease; /* Smooth transition */
  box-shadow: 2px 0 10px #FF00A9; /* Elevation effect */
}

.sidebar-logo {
  width: 42%;
  height: auto; 
  margin: 0 auto; 
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
  color: #ffffff; /* Link color */
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
  box-sizing: content-box; /* Include padding and borders in width */
  border: 2px solid #ffffff; /* Add border */
  border-radius: 4px; /* Optional: rounded corners */
}

/* Remove bullets from the submenu */
.submenu {
  list-style-type: none;
  padding-left: 0; /* Remove left padding */
  margin-left: 20px; /* Indent the submenu items */
}

/* Add specific style for the collapsed sidebar links */
.collapsed .sidebar-link {
  justify-content: center; /* Center the icon when collapsed */
}
</style>
