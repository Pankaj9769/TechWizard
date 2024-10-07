import { createSlice } from "@reduxjs/toolkit";

export const bagSlice = createSlice({
  name: "bag",
  initialState: {
    items: {}, // Use a plain object to store item IDs and quantities
  },
  reducers: {
    removeAll: (state) => {
      state.items = {}; // Clear the entire object
      console.log("Items after clear:", state.items); // Log the items for debugging
    },
    addAll: (state, action) => {
      console.log("AddAll", action.payload.response);
      action.payload.response.forEach((id) => {
        state.items[id] = 1; // Set each item with a quantity of 1
      });
      console.log("Items after addAll:", state.items); // Log after adding
    },
    addToBag: (state, action) => {
      const currentQty = state.items[action.payload] || 0; // Get current quantity or default to 0
      console.log("Quantity-> ", currentQty);
      state.items[action.payload] = currentQty + 1; // Increment quantity for the item
      console.log("Added to bag, items:", state.items[action.payload]); // Log after adding
    },
    removeFromBag: (state, action) => {
      if (state.items.hasOwnProperty(action.payload)) {
        const currentQty = state.items[action.payload];
        if (currentQty > 1) {
          state.items[action.payload] = currentQty - 1; // Decrement quantity if more than 1
        } else {
          delete state.items[action.payload]; // Remove the item if quantity reaches 0
        }
      }
      console.log("Removed from bag, items:", state.items); // Log after removing
    },
  },
});

// Export the actions
export const bagAction = bagSlice.actions;

// Export the reducer
// export default bagSlice.reducer;
