
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import authReducer from "./authSlice";
import todoListReducer from "./todoSlice";

export const allReducers = combineReducers({
  // auth: authReducer,
  todo: todoListReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // persist
  // whitelist: [
  //   'accountReducer'
  // ],
  //not persist
  blacklist: [
    'todo',
    // 'auth'
  ],
};

// let reducer = persistCombineReducers(config, allReducers)
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});