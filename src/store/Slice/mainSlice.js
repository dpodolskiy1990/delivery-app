import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    del: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearBasket: () => [],
  },
});

export const { add, del, changeQuantity, clearBasket } = mainSlice.actions;
export default mainSlice.reducer;
