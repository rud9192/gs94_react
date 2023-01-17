import {createSlice} from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name : "comment",
    initialState:{ value : {commenttoggle : true}},
    reducers : {
        commenttgupdate : (state, action) => {
            state.value = action.payload
        },
    },
});

export  const {commenttgupdate} = commentSlice.actions;
export  default commentSlice.reducer