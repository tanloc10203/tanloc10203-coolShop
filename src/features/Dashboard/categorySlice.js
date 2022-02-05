import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoryApi } from 'apis';
import { toast } from '../../utils';

const initialState = {
  isSuccess: false,
  loading: false,
  data: [],
  totalPage: 0,
  totalCategory: 0,
};

const createCategory = createAsyncThunk('category/create', async ({ token, data }) => {
  const response = await categoryApi.create({ token, data });
  return response;
});

const getCategory = createAsyncThunk('category/get', async ({ token, page, limit, key }) => {
  const response = await categoryApi.get({ token, page, limit, key });
  return response;
});

const deleteCategory = createAsyncThunk('category/delete', async ({ token, id }) => {
  const response = await categoryApi.delete({ token, id });
  return response;
});

const updateCategory = createAsyncThunk('category/update', async ({ token, id, data }) => {
  const response = await categoryApi.update({ token, id, data });
  return response;
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setIsSuccess(state, { payload }) {
      state.isSuccess = payload;
    },
  },
  extraReducers: {
    [createCategory.fulfilled]: (state, { payload }) => {
      if (payload) {
        const { error } = payload;
        if (error === 0) {
          state.isSuccess = true;
          toast.success('Tạo danh mục thành công.');
        } else if (error === 4) {
          state.isSuccess = false;
          toast.warning('Danh mục đã tôn tại');
        }
      }
    },
    [getCategory.pending]: (state) => {
      state.loading = true;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.isSuccess = false;
      state.loading = false;
      if (payload) {
        const { error, message, data, totalPage, totalCategory } = payload;
        if (error === 0 && data) {
          state.data = data;
          state.totalPage = totalPage;
          state.totalCategory = totalCategory;
        } else {
          toast.error(message);
        }
      }
    },
    [getCategory.rejected]: (state) => {
      toast.error('Lỗi từ phía sever!');
      state.loading = false;
      state.data = [];
    },
    [deleteCategory.fulfilled]: (state, { payload }) => {
      if (payload.error === 0) state.isSuccess = true;
      else toast.error(payload.message);
    },
    [deleteCategory.rejected]: () => {
      toast.error('Lỗi từ phía sever!');
    },
    [updateCategory.fulfilled]: (state, { payload }) => {
      if (payload.error === 0) state.isSuccess = true;
      else toast.error(payload.message);
    },
    [updateCategory.rejected]: () => {
      toast.error('Lỗi từ phía sever!');
    },
  },
});

const { reducer, actions } = categorySlice;

export { createCategory, getCategory, deleteCategory, updateCategory };
export const { setIsSuccess } = actions;
export default reducer;
