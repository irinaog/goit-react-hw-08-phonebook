import {   configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { filterReducer,  } from "./phoneBookReducer";
import { contactsApi } from "./contactsSlice";
import authSlice from 'auth/authSlice';




export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch)



