import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productApi } from 'apis';
import { toast } from 'utils';

const initialState = {
  isSuccess: false,
  dataCreate: null,
  dataUpdate: null,
  dataGet: null,
  loading: false,
  totalPage: null,
};

const createProduct = createAsyncThunk('product/create', async ({ token, data }) => {
  const response = await productApi.create({ token, data });
  return response;
});

const getProduct = createAsyncThunk('product/get', async ({ token, limit, page }) => {
  const response = await productApi.get({ token, limit, page });
  return response;
});

const updateProduct = createAsyncThunk('product/update', async ({ token, id, data }) => {
  const response = await productApi.update({ token, id, data });
  return response;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state, { payload }) => {
      if (payload) {
        const { error, message, data } = payload;

        if (error === 0) {
          state.isSuccess = true;
          state.dataCreate = data;
        } else toast.warning(message);
      }
    });
    builder.addCase(updateProduct.fulfilled, (state, { payload }) => {
      if (payload) {
        const { error, message, data } = payload;

        if (error === 0) {
          state.isSuccess = true;
          state.dataUpdate = data;
        } else toast.warning(message);
      }
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      if (payload) {
        state.loading = false;
        const { error, message, data, totalPage } = payload;
        if (error === 0) {
          state.totalPage = totalPage;
          state.dataGet = data;
        } else toast.warning(message);
      }
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
      state.dataGet = [];
    });
  },
});

const { reducer } = productSlice;
export { createProduct, updateProduct, getProduct };
export default reducer;
