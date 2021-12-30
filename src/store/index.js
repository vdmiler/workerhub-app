import { configureStore } from "@reduxjs/toolkit";
import summariesDataReducer from "./slices/summariesDataSlice";
import wishlistReducer from "./slices/wishlistSlice";

const store = configureStore({
   reducer: {
      summariesData: summariesDataReducer,
      wishlist: wishlistReducer,
   }
})

export default store;