import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./Slice/mainSlice";
const store = configureStore({
  reducer: {
    mainSlice,
  },
});

export default store;
