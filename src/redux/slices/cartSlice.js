// src/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // holds product objects with quantity, size, etc.
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      

      // Check if same product & same size already exists
      const existingItem = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      if (existingItem) {
        existingItem.quantity += newItem.quantity; // add to existing quantity
      } else {
        state.items.push(newItem); // add new item
      }
    },

    removeFromCart: (state, action) => {
      // Remove only that specific product (optionally match size)
      state.items = state.items.filter(
        (item) => !(item.id === action.payload.id && item.size === action.payload.size)
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
