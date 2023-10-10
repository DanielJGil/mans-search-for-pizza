import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
