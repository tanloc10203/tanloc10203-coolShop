import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { roleApi } from 'apis';
import Home from 'features/Dashboard/pages/Home';
import { getRoles } from 'features/Dashboard/roleSlice';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import TableRole from '../../components/TableRole';

function HomeRole(props) {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.role);
  const navigate = useNavigate();

  const fetchRoles = useCallback(() => {
    const token = localStorage.getItem('token');
    token !== null && token && dispatch(getRoles(token));
  }, [dispatch]);

  useEffect(() => {
    let unmounted = false;
    !unmounted && fetchRoles();
    return () => unmounted = true;
  }, [fetchRoles]);

  const handleCloseRole = useCallback(item => {
    if (item) {
      const { name, code, _id } = item;
      const token = localStorage.getItem('token');

      token && roleApi.deleteRole({ id: _id, token })
        .then(response => {
          const { error } = response;
          if (error === 0) {
            fetchRoles();
            toast.success(`Bạn đã xóa thành công ${name} với mã là ${code}`, {
              icon: <FontAwesomeIcon className="text-success" icon={faCheck} />
            });
          }
        });
    }
  }, [fetchRoles]);

  const handleUpdateRole = useCallback(item => {
    if (item) {
      const { _id } = item;
      navigate(`/admin/role/update-role/${_id}`, { replace: true });
    }
  }, [navigate]);

  return (
    <Home name="Quản lý quyền">
      <main className="main-role mt-5">
        <Container fluid className="px-3">
          <Row>
            <Col md={12}>
              <TableRole
                data={data}
                loading={loading}
                onCloseRole={handleCloseRole}
                onUpdate={handleUpdateRole}
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Outlet />
    </Home>
  )
}

HomeRole.propTypes = {

}

export default HomeRole;

