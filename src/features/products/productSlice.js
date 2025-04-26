import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/productData.json";

const initialState = {
  products: productData,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
        state.products = action.payload;
      },
    // Add reducers if needed
  },
});

export const { setProducts } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
