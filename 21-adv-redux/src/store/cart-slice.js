import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exsistingItem = state.items.find((item) => item.id === newItem.id);

      if (!exsistingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exsistingItem.quantity++;
        exsistingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const oldItem = action.payload;
      const exsistingItem = state.items.find((item) => item.id === oldItem.id);

      if (exsistingItem && exsistingItem.quantity > 1) {
        exsistingItem.quantity--;
        exsistingItem.totalPrice -= oldItem.price;
      } else {
        state.items.splice(state.items.indexOf(exsistingItem), 1);
      }

      state.totalQuantity--;
    },
  },
});

export default cartSlice;
