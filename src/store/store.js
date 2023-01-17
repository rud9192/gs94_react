import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'
import categoryReducer from './category'
import commentReducer from './comment'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    user : userReducer,
    category : categoryReducer,
    comment : commentReducer
})
export default configureStore({
    reducer: rootReducer,
})