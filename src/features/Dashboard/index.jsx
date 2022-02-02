import NotFoundPage from 'components/NotFound';
import LoginPage from 'features/Login';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import axios from '../../apis/axios';
import Category from './pages/Category';
import HomePage from './pages/Home';
import LogoutPage from './pages/Logout';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Role from './pages/Role';
import Table from './pages/Table';
import User from './pages/User';

const token = localStorage.getItem('token');

if (token) axios.defaults.headers.Authorization = `Bearer ${token}`;

function Dashboard() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<LogoutPage />} />

        <Route path="dashboard" element={<HomePage>Trang chủ</HomePage>} />

        <Route path="user/*" element={<User />} />
        <Route path="role/*" element={<Role />} />

        <Route path="table" element={<Table />} />
        <Route path="profile" element={<Profile />} />
        <Route path="product/*" element={<Product />} />
        <Route path="category/*" element={<Category />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default Dashboard;
