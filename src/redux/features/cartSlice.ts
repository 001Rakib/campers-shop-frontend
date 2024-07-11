import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartProduct = {
  _id: string;
  name: string;
  image: string;
  price: number;
  stock: number;
  orderedQuantity: number;
};

type TInitialState = {
  cartProducts: TCartProduct[];
};

const initialState: TInitialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<TCartProduct>) => {
      const orderedQuantity = 0;

      const isAddedToCart = state.cartProducts.find(
        (item) => item._id === actions.payload._id
      );

      if (isAddedToCart) {
        if (isAddedToCart.orderedQuantity !== undefined) {
          isAddedToCart.orderedQuantity++;
        }
      } else {
        state.cartProducts.push({
          ...actions.payload,
          orderedQuantity: orderedQuantity + 1,
        });
      }
    },
    removeFromCart: (state, actions) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item._id !== actions.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
