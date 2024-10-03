<template>
    <div>
      <header class="inventory-header">
        <h1>Suppliers</h1>
      </header>
      <SupplierList :suppliers="suppliers" @delete-supplier="deleteSupplier" />
    </div>
  </template>
  
  <script>
  import SupplierList from '@/components/SupplierList.vue';
  
  export default {
    components: { SupplierList },
    data() {
      return {
        suppliers: [
          { id: 1, name: 'Supplier A', contact: 'contact@supplierA.com' },
          { id: 2, name: 'Supplier B', contact: 'contact@supplierB.com' },
          { id: 3, name: 'Supplier C', contact: 'contact@supplierC.com' }
        ]
      };
    },
    methods: {
      deleteSupplier(supplierId) {
        this.suppliers = this.suppliers.filter(supplier => supplier.id !== supplierId);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  