import Home from 'features/Dashboard/pages/Home';
import React from 'react';
import Pagination from '../../container/Pagination';

function HomeUser(props) {
  return (
    <Home name="Quản lý người dùng">
      <Pagination />
    </Home>
  );
}

HomeUser.propTypes = {};

export default HomeUser;
