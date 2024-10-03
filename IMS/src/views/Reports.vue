<template>
    <div>
      <header class="inventory-header">
        <h1>Reports</h1>
      </header>
      <ReportList :reports="reports" @delete-report="deleteReport" />
    </div>
  </template>
  
  <script>
  import ReportList from '@/components/ReportList.vue';
  
  export default {
    components: { ReportList },
    data() {
      return {
        reports: [
          { id: 1, title: 'Monthly Sales Report', date: '2023-09-01' },
          { id: 2, title: 'Inventory Audit', date: '2023-09-15' },
          { id: 3, title: 'Customer Feedback', date: '2023-09-20' }
        ]
      };
    },
    methods: {
      deleteReport(reportId) {
        this.reports = this.reports.filter(report => report.id !== reportId);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  