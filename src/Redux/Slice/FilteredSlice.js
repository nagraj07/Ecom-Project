import { createSlice } from "@reduxjs/toolkit";

const FilteredSlice = createSlice({
    name: "searchingdata",
    initialState: {
        filtereddata: [],
    },
    reducers: {
        setFilteredData: (state, action) => {
            state.filtereddata = action.payload;
        },

    }
})

export const { setFilteredData } = FilteredSlice.actions;
export default FilteredSlice.reducer;