import { configureStore } from '@reduxjs/toolkit';
import loginReducer from 'features/Login/loginSlice';
import registerReducer from 'features/Register/registerSlice';
import headerReducer from 'features/Dashboard/headerSlice';
import roleReducer from 'features/Dashboard/roleSlice';
import userReducer from 'features/Dashboard/userSlice';

const rootReducers = {
  login: loginReducer,
  register: registerReducer,
  header: headerReducer,
  role: roleReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
