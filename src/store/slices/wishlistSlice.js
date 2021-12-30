import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   wishlist: [],
}

const wishlistSlice = createSlice({
   name: 'wishlist',
   initialState,
   reducers: {
      setWishes(state, action) {
         state.wishlist = action.payload;
      },
   }
})

export const { setWishes } = wishlistSlice.actions;

export default wishlistSlice.reducer;