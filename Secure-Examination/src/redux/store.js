import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
// import themeReducer from './theme/themeSlice';
import {persistReducer,persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import pdfReducer from './pdfSlice.js'

const rootReducer = combineReducers({
  user: userReducer,
  pdf: pdfReducer
//   theme: themeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
