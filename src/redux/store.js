import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/todoSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedTodosReducer = persistReducer(
  { key: 'todos', storage, blacklist: ['selectedItem'] },
  todoSlice.reducer
);

export const store = configureStore({
  reducer: { [todoSlice.name]: persistedTodosReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
