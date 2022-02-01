import Home from 'features/Dashboard/pages/Home';
import { createRole, updateRole } from 'features/Dashboard/roleSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import FormAddRole from '../FormAddRole';

const findRoleById = (id, data) => {
  if (id) {
    let role = {};

    if (data && data.length > 0) {
      role = data.find((r) => r._id === id);
    }

    return {
      code: role.code,
      name: role.name,
    };
  }
};

function AddRole() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isAddMode = !id;
  const { data, create } = useSelector((state) => state.role);

  useEffect(() => {
    create && navigate('/admin/role', { replace: true });
  }, [create, navigate]);

  const initialValues = isAddMode
    ? {
        name: '',
        code: '',
      }
    : findRoleById(id, data);

  const handleSubmit = (data, { setSubmitting, resetForm }) => {
    return new Promise((resolve, reject) => {
      try {
        const token = localStorage.getItem('token');

        setTimeout(() => {
          if (isAddMode) {
            token && dispatch(createRole({ data, token }));
            resetForm(initialValues);
          } else {
            token && dispatch(updateRole({ id, token, data }));
          }
          setSubmitting(false);
          resolve(true);
        }, 1500);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <Home name={isAddMode ? 'Thêm quyền' : 'Cập nhật quyền'}>
      <main className="main-role mt-5">
        <Container fluid className="px-3">
          <Row>
            <Col md={12}>
              <FormAddRole
                initialValues={initialValues}
                onSubmit={handleSubmit}
                isAddMode={isAddMode}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </Home>
  );
}

export default AddRole;
