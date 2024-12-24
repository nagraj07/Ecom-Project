import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: "data",
    initialState: {
        products: [],
    },
    reducers: {
        addproducts: (state, action) => {

            // console.log("Action payload:", action.payload);

            if (Array.isArray(action.payload)) {
                state.products = action.payload; // Directly set products if payload is an array
            }

            else if (action.payload && action.payload.products) {
                state.products = action.payload.products; // Handle if payload contains products under a key
            }

            // console.log("Updated products in state:", state.products); // Verify state
        },

    }
})

export const { addproducts } = DataSlice.actions;
export default DataSlice.reducer;