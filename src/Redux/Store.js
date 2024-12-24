import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import DataSlice from "./Slice/DataSlice";
import FilteredSlice from "./Slice/FilteredSlice";

export const Store = configureStore({
    reducer:{
        cart: CartSlice,
        data: DataSlice,
        searchingdata: FilteredSlice,
    }
});