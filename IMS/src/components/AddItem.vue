<template>
  <div class="popout-form" v-if="isVisible">
    <h2>Add Item</h2>
    <form @submit.prevent="submit" class="form-container">
      <div class="form-group">
        <input v-model="name" placeholder="Item Name" required />
      </div>
      <div class="form-group">
        <input v-model="quantity" type="number" placeholder="Quantity" required />
      </div>
      <div class="form-actions">
        <button type="submit">Add Item</button>
        <button type="button" @click="closeForm">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      name: '',
      quantity: 0
    };
  },
  methods: {
    closeForm() {
      this.resetForm();
      this.$emit('close');
    },
    resetForm() {
      this.name = '';
      this.quantity = 0;
    },
    submit() {
      const newItem = {
        id: Date.now(),
        name: this.name,
        quantity: this.quantity
      };
      this.$emit('add', newItem);
      this.closeForm();
    }
  }
};
</script>

<style scoped>
.popout-form {
  background-color: #ffffffa9;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.459);
  position: absolute;
  right: 50%; /* Center horizontally */
  top: 50%; /* Center vertically */
  transform: translate(50%, -50%); /* Adjust position to center */
}

.form-container {
  display: flex;
  flex-direction: row; /* Arrange contents in a row */
  align-items: center; /* Center items vertically */
}

.form-group {
  margin-right: 10px; /* Space between input fields */
}

.form-actions {
  display: flex;
  gap: 10px; /* Space between buttons */
}
</style>
