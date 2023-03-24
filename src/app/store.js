import { configureStore } from "@reduxjs/toolkit";
import clothesStoreReducer from "../features/clothesStore/clothesStoreSlice";
import clothesDetailReducer from "../features/clothesDetail/clothesDetailSlice";

export const store = configureStore({
  reducer: {
    clothesStore: clothesStoreReducer,
    clothesDetail: clothesDetailReducer,
  },
});
