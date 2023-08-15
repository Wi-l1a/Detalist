import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allAPIs } from "./../API/index";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const res = await allAPIs.getProduct();
      if (res.status !== 200) {
        throw new Error("Server Error, can't resolve categories");
      }
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    error: null,
    product: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
