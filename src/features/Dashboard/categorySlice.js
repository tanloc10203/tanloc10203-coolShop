import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { categoryApi } from 'apis';
import { toast } from '../../utils';

const initialState = {
  isSuccess: false,
};

const createCategory = createAsyncThunk('category/create', async ({ token, data }) => {
  const response = await categoryApi.create({ token, data });
  console.log(response);
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
      console.log(payload);
      if (payload) {
        const { error } = payload;

        console.log(error);

        if (error === 0) {
          state.isSuccess = true;
          toast.success('Tạo danh mục thành công.');
        } else if (error === 4) {
          state.isSuccess = false;
          toast.warning('Danh mục đã tôn tại');
        }
      }
    },
  },
});

const { reducer, actions } = categorySlice;

export { createCategory };
export const { setIsSuccess } = actions;
export default reducer;
