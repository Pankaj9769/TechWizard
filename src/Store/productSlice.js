// src/features/product/productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // or fetch for making the DB/API call
import { bagAction } from "./bagSlice";

// Initial state for the product slice
const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Actions to manage loading and error states
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Exporting the actions generated by createSlice
export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

// Thunk function to fetch products (DB/API call inside the slice)
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart()); // Set loading state
  try {
    // Making an API call (could be a DB call through an API endpoint)
    const response = await axios.get("http://localhost:3000/product/all"); // Replace with your API or DB call
    dispatch(fetchProductsSuccess(response.data)); // Dispatching success action
    // dispatch(bagAction.addAll(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message)); // Dispatching failure action
  }
};

// Default export for the reducer
export default productSlice.reducer;
