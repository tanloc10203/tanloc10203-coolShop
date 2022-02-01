import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "apis";
import { toast } from "utils";


const initialState = {
  isSuccess: false,
  data: null,
  loading: false,
  totalPage: 0
}

const registerUser = createAsyncThunk("user/register", async data => {
  const response = await userApi.registerUser(data);
  return response;
});

const getUser = createAsyncThunk("user/get", async ({ page, limit, token }) => {
  const response = await userApi.getUser({ page, limit, token });
  return response;
});

const deleteUser = createAsyncThunk("user/delete", async ({ id, token }) => {
  const response = await userApi.deleteUser({ id, token });
  return response;
});

const updateUser = createAsyncThunk("user/update", async ({ id, token, data }) => {
  const response = await userApi.updateUser({ id, token, data });
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsSuccess(state, { payload }) {
      state.isSuccess = payload;
    }
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        const { error } = payload;
        if (error === 2) {
          toast.warning("Email đã tồn tại");
        } else {
          state.isSuccess = true;
          toast.success("Thêm thành công");
        }
      }
    },
    [getUser.pending]: state => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      if (payload) {
        const { error, data, totalPage } = payload;
        state.isSuccess = false;
        state.loading = false;

        switch (error) {
          case 2:
            toast.warning("Vui lòng đăng nhập lại!");
            break;
          case 0:
            state.data = data;
            state.totalPage = totalPage;
            break;
          default:
            throw new Error("Error code not found: " + error);
        }
      }
    },
    [getUser.rejected]: state => {
      toast.error("Lỗi kết nối sever!");
      state.loading = false;
      state.data = [];
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      if (payload) {

        const { error } = payload;

        if (error === 0) {
          state.isSuccess = true;
          toast.success("Xóa thành công");
        }
      }
    },
    [deleteUser.rejected]: state => {
      toast.error("Lỗi kết nối sever!");
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      if (payload) {

        const { error } = payload;

        if (error === 0) {
          state.isSuccess = true;
          toast.success("Cập nhật thành công");
        }
      }
    },
    [updateUser.rejected]: state => {
      toast.error("Lỗi kết nối sever!");
    },
  },
});

const { reducer, actions } = userSlice;

export { registerUser, getUser, deleteUser, updateUser };
export const { setIsSuccess } = actions;
export default reducer;
