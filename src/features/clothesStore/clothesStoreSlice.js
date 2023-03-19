import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStore } from "./clothesStoreAPI";

const initialState = {
  loading: false,
  list: [],
};

export const getClothesAsync = createAsyncThunk(
  "clothes/getClothes",
  async () => {
    const data = await fetchStore();
    return data;
  }
);

const clothesStoreSlice = createSlice({
  name: "clothesStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClothesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClothesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});
export const selectClothesStore = (state) => state.clothesStore;

export default clothesStoreSlice.reducer;
