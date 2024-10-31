import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store'; // Import Vuex store
import './assets/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.use(router);
app.use(store); // Use Vuex store

// Dispatch the action to initialize the items
store.dispatch('initializeItems');

app.mount('#app');
