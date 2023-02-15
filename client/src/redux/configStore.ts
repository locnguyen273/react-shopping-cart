import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";
import addressReducer from "./reducers/addressReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { slideReducer } from "./reducers/sliderReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  authReducer,
  slideReducer,
  addressReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
