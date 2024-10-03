<template>
  <div>
    <header class="inventory-header">
      <h1>WELCOME PO!</h1>
    </header>
    <div class="button-container">
      <!-- You can add buttons here if needed -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToInventory() {
      this.$router.push('/inventory'); // Navigate to the inventory page
    }
  }
}
</script>

<style scoped>
.inventory-header {
  background-color: #ffffff; /* Background color for the header */
  padding: 10px 20px; /* Adjusted padding for the header */
 margin-left: 15px;
  margin-bottom: 20px; /* Space below the header */
  text-align: left; /* Center align the text */
}

.inventory-header h1 {
  color: #000000; /* White text color for contrast */
  font-size: 24px; /* Adjust font size */
  font-weight: 900;
  font-family: 'Arial', sans-serif;
  margin: 0; /* Remove default margin */
}
</style>
