import { TProduct } from "@/components/topSelling/TopSelling";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  cartProducts: TProduct[];
};

const initialState: TInitialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<TProduct>) => {
      console.log("state =>", state, "action =>", actions);
      state.cartProducts.push({ ...actions.payload });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
