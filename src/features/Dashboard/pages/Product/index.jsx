import HomeProduct from 'features/Dashboard/components/products/HomeProduct';
import NewProduct from 'features/Dashboard/components/products/NewProduct';
import TrashProduct from 'features/Dashboard/components/products/TrashProduct';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function Product(props) {
  return (
    <Routes>
      <Route path="" element={<HomeProduct />} />
      <Route path="new-product" element={<NewProduct />} />
      <Route path="update-product" element={<NewProduct />} />
      <Route path="trash" element={<TrashProduct />} />
    </Routes>
  );
}

Product.propTypes = {};

export default Product;
