import { faBook } from '@fortawesome/free-solid-svg-icons';
import FormikForm from 'customs/customForm/FormikForm';
import InputField from 'customs/customForm/InputField';
import Home from 'features/Dashboard/pages/Home';
import { FastField } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchemaCategory } from 'utils';
import { useAuth } from 'components/ProtectRouter';
import { createCategory } from 'features/Dashboard/categorySlice';
import { useNavigate } from 'react-router-dom';

function CreateCategory() {
  const dispatch = useDispatch();
  const token = useAuth();
  const navigate = useNavigate();
  const { isSuccess } = useSelector((state) => state.category);
  const initialValues = { name: '' };
  const isAddMode = true;

  useEffect(() => {
    if (isSuccess) {
      navigate('/admin/category', { replace: true });
    }
  }, [isSuccess, navigate]);

  const handleOnSubmit = (values, { resetForm, setSubmitting }) => {
    return new Promise((resolve) => {
      if (token) {
        setTimeout(async () => {
          const response = await dispatch(createCategory({ token, data: values }));
          const { payload } = response;
          if (payload) {
            const { error } = payload;
            if (error === 0) resetForm();
          }
          setSubmitting(false);
          resolve(true);
        }, 500);
      }
    });
  };

  return (
    <Home name="Thêm danh mục">
      <main className="category__create">
        <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchemaCategory}
          onSubmit={handleOnSubmit}
          isAddMode={isAddMode}
          className="mt-5"
          action={isAddMode ? 'Thêm mới' : 'Chỉnh sửa'}
        >
          <FastField
            label="Tên danh mục"
            icon={faBook}
            name="name"
            placeholder="Nhập tên danh mục..."
            component={InputField}
          />
        </FormikForm>
      </main>
    </Home>
  );
}

export default CreateCategory;
