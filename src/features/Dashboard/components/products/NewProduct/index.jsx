import {
  faAudioDescription,
  faBook,
  faFileUpload,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from 'components/ProtectRouter';
import FormikForm from 'customs/customForm/FormikForm';
import FormRow from 'customs/customForm/FormRow';
import { getCategory } from 'features/Dashboard/categorySlice';
import Home from 'features/Dashboard/pages/Home';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, FormFeedback, FormGroup, Input, Label, Row, Spinner } from 'reactstrap';
import {
  arrNameAndPriceProduct,
  arrNumAndKeyProduct,
  validateSchemaProductCreate,
  validateSchemaProductNext,
} from 'utils';
import styles from './NewProduct.module.scss';
import clsx from 'clsx';
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import InputField from 'customs/customForm/InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PreviewImage from '../../PreviewImage';
import Markdown from '../../Markdown';

function NewProduct(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);
  const [arrSelect, setArrSelect] = useState([]);
  const token = useAuth();
  const isAddMode = true;
  const initialValues = {
    name: '',
    price: '',
    num: '',
    keyProduct: '',
    category_id: '',
  };
  const initialValuesNext = {
    disc: '',
    detail: '',
    thumbnail: null,
  };

  const handleOnSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(values);
  };

  useEffect(() => {
    if (token) {
      dispatch(getCategory({ token, key: 'ALL' }));
    }
  }, [dispatch, token]);

  useEffect(() => {
    let array = [];
    if (data && data.length) {
      data.forEach((item) => array.push({ label: item?.name, value: item?._id }));
      setArrSelect(array);
    }
  }, [data]);

  return (
    <Home name="Thêm sản phẩm">
      <Container fluid className="px-3">
        <Row>
          <Col md={12}>
            {/* <FormikForm
              className="mt-5"
              initialValues={initialValues}
              validationSchema={validateSchemaProductCreate}
              onSubmit={handleOnSubmit}
              action={'Tiếp tục'}
              isAddMode={isAddMode}
              disabledHeader
              arrSelect={{
                name: 'category_id',
                arrOptions: arrSelect,
                label: 'Danh mục',
                icon: faBook,
                labelFirst: 'Chọn danh mục',
              }}
            >
              <h4 className={clsx('main-card__header', styles.header)}>
                <span className={styles.activeText}>Thêm thông tin</span>
                <span className={clsx('dashed-white ms-3', styles.active)}></span>
                <span className={styles.doted}></span>
                <span className="dashed-white me-3"></span>
                <span>Thêm chi tiết</span>
              </h4>
              <FormRow arrFileds={arrNameAndPriceProduct} isAddMode />
              <FormRow arrFileds={arrNumAndKeyProduct} isAddMode />
            </FormikForm> */}

            <Formik
              initialValues={initialValuesNext}
              validationSchema={validateSchemaProductNext}
              onSubmit={handleOnSubmit}
            >
              {({ isSubmitting, errors, values, touched, setFieldValue }) => {
                console.log({ errors, values, touched });

                const showError = errors['thumbnail'] && touched['thumbnail'] ? true : false;
                const notError = values['thumbnail'] && !errors['thumbnail'] ? true : false;

                console.log({ showError, notError });

                return (
                  <Form>
                    <FastField
                      icon={faAudioDescription}
                      type="textarea"
                      cols={30}
                      rows={20}
                      label="Giới thiệu sản phẩm"
                      name="disc"
                      component={InputField}
                    />

                    <Label htmlFor={'thumbnail'}>
                      <FontAwesomeIcon className="text-muted" icon={faInfo} />{' '}
                      <span className="text-muted">{'Chi tiết sản phẩm'}</span>
                    </Label>

                    <FormGroup>
                      <Label htmlFor={'thumbnail'}>
                        <FontAwesomeIcon className="text-muted mt-3" icon={faFileUpload} />{' '}
                        <span className="text-muted">{'Thêm ảnh tiêu đề'}</span>
                      </Label>

                      <Input
                        invalid={showError}
                        type="file"
                        name="thumbnail"
                        valid={notError}
                        onChange={(event) => setFieldValue('thumbnail', event.target.files[0])}
                        id="thumbnail"
                      />

                      <ErrorMessage name="thumbnail" component={FormFeedback} />
                    </FormGroup>

                    {values && values.thumbnail && <PreviewImage files={values.thumbnail} />}

                    <button
                      type="submit"
                      className={`btn btn-${!isAddMode ? 'success' : 'primary'} mb-5`}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner className="m-1" type="grow" size="sm" />
                          <Spinner className="m-1" type="grow" size="sm" />
                          <Spinner className="m-1" type="grow" size="sm" />
                        </>
                      ) : (
                        'Thêm mới'
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </Home>
  );
}

NewProduct.propTypes = {};

export default NewProduct;
