import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from 'components/ProtectRouter';
import FormikForm from 'customs/customForm/FormikForm';
import InputField from 'customs/customForm/InputField';
import { createCategory, updateCategory } from 'features/Dashboard/categorySlice';
import Home from 'features/Dashboard/pages/Home';
import { FastField } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { validationSchemaCategory } from 'utils';

function CreateCategory() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const token = useAuth();
  const { isSuccess } = useSelector((state) => state.category);
  const isAddMode = !state;
  const initialValues = isAddMode ? { name: '' } : { name: state?.name };

  useEffect(() => {
    if (isSuccess) {
      navigate('/admin/category', { replace: true });
    }
  }, [isSuccess, navigate]);

  const handleOnSubmit = (values, { resetForm, setSubmitting }) => {
    return new Promise((resolve) => {
      if (token) {
        console.log('values', values);
        setTimeout(async () => {
          let response = null;
          if (isAddMode) {
            response = await dispatch(createCategory({ token, data: values }));
          } else {
            response = await dispatch(updateCategory({ token, id: state?._id, data: values }));
          }

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
