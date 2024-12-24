import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {

    addtoCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        alert("Alredy Added to Cart");
        return;
      } else {
        state.push({ ...item, quantity: 1 });
        alert("Added to Cart");
      }
    },


    removetoCart: (state, action) => {
      const item = action.payload;
      const index = state.findIndex(cartItem => cartItem.id === item.id);

      if (index !== -1) {
        if (state[index].quantity > 1) {
          state.splice(index, 1);
          return;
        } else {
          // Remove the item entirely if quantity is 1
          state.splice(index, 1);
        }
      }
    },

    deleteAll: (state) => {
      return [];
    },

    addQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // state.push({ ...item, quantity: 1 });
      }
    },

    removeQuantity: (state, action) => {
      const item = action.payload;
      const index = state.findIndex(cartItem => cartItem.id === item.id);

      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
          return;
        } else {
          // Remove the item entirely if quantity is 1
          // state.splice(index, 1);
        }
      }
    },

  }
})

export const { addtoCart, removetoCart, deleteAll, addQuantity, removeQuantity } = CartSlice.actions;
export default CartSlice.reducer;