import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authApi } from 'apis';
import { toast } from 'utils';

const initialState = {
  user: null,
  loading: false,
  errors: {},
  isLogin: false,
};

const authLogin = createAsyncThunk('auth/login', async (data) => {
  const response = await authApi.login(data);
  return response;
});

const authGetUserLogin = createAsyncThunk('auth/getUserLogin', async (token) => {
  const response = await authApi.getUserLogin(token);
  return response;
});

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    handleLogout() {
      localStorage.removeItem('token');
      return initialState;
    },
  },
  extraReducers: {
    [authLogin.fulfilled]: (state, { payload }) => {
      const { error, data } = payload;

      if (error === 0) {
        localStorage.setItem('token', data.accessToken);
        state.errors = {};
        state.isLogin = true;
      } else if (error === 2) {
        state.errors.err = 'Email không tồn tại';
      } else state.errors.err = 'Mật khẩu không đúng';
    },
    [authGetUserLogin.pending]: (state) => {
      state.loading = true;
      state.user = null;
    },
    [authGetUserLogin.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.loading = false;
        const { error, data } = payload;

        if (error === 0) {
          if (data) state.user = data;
        } else {
          toast.warning('Vui lòng đăng nhập lại!');
          state.isLogin = false;
          localStorage.removeItem('token');
        }
      }
    },
    [authGetUserLogin.rejected]: (state) => {
      toast.error('Phiên đăng nhập đã hết hạn.');
      state.loading = false;
      state.user = null;
    },
  },
});

const { reducer, actions } = LoginSlice;

export { authLogin, authGetUserLogin };
export const { handleLogout } = actions;
export default reducer;
