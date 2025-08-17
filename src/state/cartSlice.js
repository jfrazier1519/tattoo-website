// slices/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // each item: { id, name, price, image, quantity, customOptions }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existing = state.items.find(
        (item) =>
          item.id === newItem.id &&
          JSON.stringify(item.customOptions) ===
            JSON.stringify(newItem.customOptions)
      );

      if (existing) {
        existing.quantity += newItem.quantity || 1;
      } else {
        state.items.push({ ...newItem, quantity: newItem.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item, i) => i !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      if (state.items[index]) {
        state.items[index].quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
