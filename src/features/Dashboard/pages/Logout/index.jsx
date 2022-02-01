import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { handleLogout } from "../../../Login/loginSlice";

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLogout());
  }, [dispatch]);

  return <Navigate to="/admin/login" />;
}

export default Logout

