<template>
  <div class="app-container">
    <div class="header-container">
      <h1 class="header">Create Order</h1>
    </div>

    <div class="content-wrapper">
      <div class="main-content">
          <!-- Menu Items -->
          <OrderItemSelector 
            :items="order.items"
            :menuItems="menuItems"
            @update:items="updateOrderItems"
          />
        </div>

      <!-- Customer Details and Order Summary -->
      <div class="order-details-section">
        <div class="customer-details">
          <h2>Customer Details</h2>
          <div class="form-group">
            <label>Customer Name</label>
            <input v-model="order.customerName" type="text" required class="form-input" />
          </div>

          <div class="form-group">
            <label>Table Number</label>
            <input v-model.number="order.tableNumber" type="number" required class="form-input" />
          </div>
        </div>

        <OrderSummary 
          :items="order.items"
          :menuItems="menuItems"
        />

        <div class="form-actions">
          <button type="button" @click="resetForm" class="reset-btn">Reset</button>
          <button type="submit" @click.prevent="submitOrder" class="submit-btn">Create Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderItemSelector from '@/components/OrderItemSelector.vue'
import OrderSummary from '@/components/OrderSummary.vue'

export default {
  name: 'CreateOrder',
  components: {
    OrderItemSelector,
    OrderSummary
  },
  data() {
    return {
      order: {
        customerName: '',
        tableNumber: null,
        items: [{ name: '', quantity: 1 }],
        status: 'pending'
      },
      menuItems: [
        { id: 1, name: 'Cappuccino', price: 150.00 },
        { id: 2, name: 'Latte', price: 140.00 },
        { id: 3, name: 'Espresso', price: 120.00 },
        { id: 4, name: 'Mocha', price: 160.00 },
        { id: 5, name: 'Croissant', price: 95.00 },
        { id: 6, name: 'Muffin', price: 85.00 },
        { id: 7, name: 'Cappuccino', price: 150.00 },
        { id: 8, name: 'Latte', price: 140.00 },
        { id: 9, name: 'Espresso', price: 120.00 },
        { id: 10, name: 'Mocha', price: 160.00 },
        { id: 11, name: 'Croissant', price: 95.00 },
      ]
    }
  },
  methods: {
    updateOrderItems(newItems) {
      // Ensure we always have at least one empty item for new additions
      this.order.items = newItems.length > 0 ? newItems : [{ name: '', quantity: 1 }]
    },
    submitOrder() {
      // Filter out empty items before submitting
      const validItems = this.order.items.filter(item => item.name)
      if (validItems.length === 0) {
        alert('Please add at least one item to the order')
        return
      }
      if (!this.order.customerName) {
        alert('Please enter customer name')
        return
      }
      if (!this.order.tableNumber) {
        alert('Please enter table number')
        return
      }

      // Create a clean order object
      const orderToSubmit = {
        ...this.order,
        items: validItems
      }

      // TODO: Implement order submission to backend
      console.log('Order submitted:', orderToSubmit)
      this.$router.push('/orders')
    },
    resetForm() {
      this.order = {
        customerName: '',
        tableNumber: null,
        items: [{ name: '', quantity: 1 }],
        status: 'pending'
      }
    }
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
  height: 100vh; /* Full viewport height */
}

.header-container {
  margin: 20px 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
  
}

.main-content {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 60px); /* Adjust this value to fit your design */
  overflow-y: auto; /* Enable vertical scrolling when content overflows */
}

.order-details-section {
  background: white;
  border-radius: 8px;
  padding: 0px;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.customer-details {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.5em;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-input {
  width: 95%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 30px;
}

.submit-btn {
  background: #FF32BA;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
}

.reset-btn {
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>