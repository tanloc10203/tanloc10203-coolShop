import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const useAuth = () => {
  const token = localStorage.getItem('token');
  return token === null ? false : token;
};

function ProtectRouter({ children }) {
  const { user } = useSelector((state) => state.login);
  const isAuth = useAuth();

  useEffect(() => {
    if (!isAuth && !user) <Navigate to="/admin/login" />;
  }, [isAuth, user]);

  return children;
}

ProtectRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(ProtectRouter);
