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

const getProduct = createAsyncThunk('product/get', async ({ token, limit, page, deleteInput }) => {
  const response = await productApi.get({ token, limit, page, deleteInput });
  return response;
});

const updateProduct = createAsyncThunk('product/update', async ({ token, id, data, recover }) => {
  const response = await productApi.update({ token, id, data, recover });
  return response;
});

const deleteProduct = createAsyncThunk('product/delete', async ({ token, id, deleteInput }) => {
  const response = await productApi.delete({ token, id, deleteInput });
  return response;
})

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setIsSuccess(state, { payload }) {
      console.log(payload);
      state.isSuccess = payload;
    }
  },
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
        state.isSuccess = false;
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
      state.totalPage = 0;
    });
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      if (payload) {
        const { error, message, } = payload;
        if (error === 0) {
          state.isSuccess = true;
        } else toast.warning(message);
      }
    });
  },
});

const { reducer, actions } = productSlice;

export { createProduct, updateProduct, getProduct, deleteProduct };
export const { setIsSuccess } = actions;
export default reducer;
