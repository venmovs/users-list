import { configureStore } from '@reduxjs/toolkit';
import { UsersAPI } from '../services/users-api';

export const store = configureStore({
  reducer: {
    [UsersAPI.reducerPath]: UsersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UsersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
