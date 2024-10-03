<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/SideBar.vue';

export default {
  components: {
    Sidebar
  }
}
</script>

<style scoped>
.main-content {
  margin-left: 200px; /* Adjust based on sidebar width */
  transition: margin-left 0.3s ease; /* Smooth transition for margin */
}

.sidebar.collapsed + .main-content {
  margin-left: 50px; /* Adjust when sidebar is collapsed */
}
</style>
