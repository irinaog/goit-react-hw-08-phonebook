import {   configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistStore, persistReducer } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from 'auth/authSlice';
import contactsSlice from "./contactsSlice";


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}
const authPersistedReducer =  persistReducer(authPersistConfig, authSlice)

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    contacts:contactsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
setupListeners(store.dispatch)



