import { createReducer } from "@reduxjs/toolkit";
import {filter } from "./phoneBookActions";

export const filterReducer = createReducer('', {
    [filter]: (state, action) => state = action.payload,
});