import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
};

const RegisterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
});

const { reducer, actions } = RegisterSlice;

export const {} = actions;
export default reducer;
