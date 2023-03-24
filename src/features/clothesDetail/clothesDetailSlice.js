import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOneProduct } from "./clothesDetailAPI";

const initialState = {
  loader: false,
  product: {},
};

export const getOneProductAsync = createAsyncThunk(
  "clothes/getOneProduct",
  async (id) => {
    const data = await fetchOneProduct(id);
    return data;
  }
);

const clothesDetailSlice = createSlice({
  name: "clothesDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneProductAsync.pending, (state) => {
        state.loader = true;
      })
      .addCase(getOneProductAsync.fulfilled, (state, action) => {
        state.loader = false;
        state.product = action.payload;
      });
  },
});

export const selectClothesDetail = (state) => state.clothesDetail;

export default clothesDetailSlice.reducer;
