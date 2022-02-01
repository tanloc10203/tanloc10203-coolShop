import HomeUser from 'features/Dashboard/components/user/HomeUser';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewUser from '../../components/user/NewUser';

function User() {
  return (
    <Routes>
      <Route path="" element={<HomeUser />} />
      <Route path="new-user" element={<NewUser />} />
      <Route path="update-user" element={<NewUser />} />
    </Routes>
  );
}

export default User;
