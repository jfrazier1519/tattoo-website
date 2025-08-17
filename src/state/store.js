import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadCartFromStorage = () => {
  try {
    const serialized = localStorage.getItem("cart");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCartFromStorage(),
  },
});

store.subscribe(() => {
  try {
    const serialized = JSON.stringify(store.getState().cart);
    localStorage.setItem("cart", serialized);
  } catch (e) {
    console.error("Could not save cart to localStorage", e);
  }
});

export default store;
