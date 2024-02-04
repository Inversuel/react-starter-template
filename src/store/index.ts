import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '@/store/user-slice';
import { Products } from '@/services/products.ts';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    [Products.reducerPath]: Products.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Products.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
