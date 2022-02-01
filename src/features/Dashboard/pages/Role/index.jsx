import AddRole from 'features/Dashboard/components/AddRole';
import HomeRole from 'features/Dashboard/components/HomeRole';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./Role.scss";

function Role(props) {
  return (
    <Routes>
      <Route path="" element={<HomeRole />}/>
      <Route path="add-role" element={<AddRole />} />
      <Route path="update-role/:id" element={<AddRole />} />
    </Routes>
  )
}

Role.propTypes = {

}

export default Role

