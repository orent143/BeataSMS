<template>
    <div>
      <h2>Reports</h2>
      <ul>
        <li v-for="report in reports" :key="report.id">
          {{ report.title }} - Date: {{ report.date }}
          <button @click="editReport(report.id)">Edit</button>
          <button @click="deleteReport(report.id)">Delete</button>
        </li>
      </ul>
      <button @click="addReport">Add Report</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      reports: {
        type: Array,
        required: true
      }
    },
    methods: {
      addReport() {
        // Logic to add a report
        console.log("Add report clicked");
      },
      editReport(reportId) {
        // Logic to edit a report
        console.log("Edit report:", reportId);
      },
      deleteReport(reportId) {
        this.$emit('delete-report', reportId);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add styles here if needed */
  </style>
  