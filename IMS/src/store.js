import { createStore } from 'vuex';

const store = createStore({
  state: {
    items: []  // Initialize with an empty array
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    removeItem(state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId);
    },
    editItem(state, updatedItem) {
      const index = state.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        state.items.splice(index, 1, updatedItem);
      }
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('addItem', item);
    },
    removeItem({ commit }, itemId) {
      commit('removeItem', itemId);
    },
    editItem({ commit }, updatedItem) {
      commit('editItem', updatedItem);
    }
  },
  getters: {
    items: state => state.items
  }
});

export default store;
