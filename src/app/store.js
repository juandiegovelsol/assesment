import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import clothesStoreReducer from "../features/clothesStore/clothesStoreSlice";
import clothesDetailReducer from "../features/clothesDetail/clothesDetailSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clothesStore: clothesStoreReducer,
    clothesDetail: clothesDetailReducer,
  },
});
