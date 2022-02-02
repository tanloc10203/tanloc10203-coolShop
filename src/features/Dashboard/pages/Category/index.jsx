import CreateCategory from 'features/Dashboard/components/category/CreateCategory';
import HomeCategory from 'features/Dashboard/components/category/HomeCategory';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Category() {
  return (
    <Routes>
      <Route path="" element={<HomeCategory />} />
      <Route path="create" element={<CreateCategory />} />
      <Route path="update" element={<CreateCategory />} />
    </Routes>
  );
}

export default Category;
