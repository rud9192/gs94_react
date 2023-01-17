import {createSlice} from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name : "category",
    initialState:{ value : {no : 0, title : "Category", categorytoggle : true, listtoggle : true}},
    reducers : {
        categorystoreupdate : (state, action) => {
            state.value = action.payload
        },
    },
});

export  const {categorystoreupdate} = categorySlice.actions;
export  default categorySlice.reducer