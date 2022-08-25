import {   configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { filterReducer,  } from "./phoneBookReducer";
import { contactsApi } from "./contactsSlice";




export const store = configureStore({
  reducer: {
    filter:filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch)



