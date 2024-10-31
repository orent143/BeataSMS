import { createStore } from 'vuex';

const cafeInventoryData = [
  {
    id: 1,
    name: "Espresso",
    quantity: 50,
    costPrice: 60,
    category: "Beverages",
    supplier: "Coffee Co.",
    status: "In Stock"
  },
  {
    id: 2,
    name: "Cappuccino",
    quantity: 30,
    costPrice: 50,
    category: "Beverages",
    supplier: "Coffee Co.",
    status: "In Stock"
  },
  {
    id: 3,
    name: "Croissant",
    quantity: 20,
    costPrice: 50,
    category: "Bakery",
    supplier: "Bakery Inc.",
    status: "Low Stock"
  },
  {
    id: 4,
    name: "Bagel",
    quantity: 15,
    costPrice: 20,
    category: "Bakery",
    supplier: "Bakery Inc.",
    status: "In Stock"
  },
  {
    id: 5,
    name: "Lemonade",
    quantity: 25,
    costPrice: 75,
    category: "Beverages",
    supplier: "Beverage Co.",
    status: "In Stock"
  },
  {
    id: 6,
    name: "Cheese Sandwich",
    quantity: 10,
    costPrice: 60,
    category: "Food",
    supplier: "Deli Foods",
    status: "Out of Stock"
  },
  {
    id: 7,
    name: "Cheese Sandwich",
    quantity: 10,
    costPrice: 60,
    category: "Food",
    supplier: "Deli Foods",
    status: "Out of Stock"
  },
  {
    id: 8,
    name: "Cheese Sandwich",
    quantity: 10,
    costPrice: 60,
    category: "Food",
    supplier: "Deli Foods",
    status: "Out of Stock"
  },
  {
    id: 9,
    name: "Cheese Sandwich",
    quantity: 10,
    costPrice: 60,
    category: "Food",
    supplier: "Deli Foods",
    status: "Out of Stock"
  },
  {
    id: 10,
    name: "Cheese Sandwich",
    quantity: 10,
    costPrice: 60,
    category: "Food",
    supplier: "Deli Foods",
    status: "Out of Stock"
  },
  {
    id: 11,
    name: "Cheese Sandwich",
    quantity: 10,
    costPrice: 60,
    category: "Food",
    supplier: "Deli Foods",
    status: "Out of Stock"
  },
  {
    id: 12,
    name: "Cheese Sandwich",
    quantity: 10,
    costPrice: 60,
    category: "Food",
    supplier: "Deli Foods",
    status: "Out of Stock"
  }
];

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
    },
    initializeItems(state, items) {
      state.items = items;  // Set initial items
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
    },
    initializeItems({ commit }) {
      commit('initializeItems', cafeInventoryData); // Initialize items
    }
  },
  getters: {
    items: state => state.items
  }
});

export default store;
