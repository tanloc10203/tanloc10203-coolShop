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
import { arrNameAndPriceProduct, arrNumAndKeyProduct, validateSchemaProductCreate } from 'utils';
import styles from './NewProduct.module.scss';
import clsx from 'clsx';
import { ErrorMessage, FastField, Field, Form, Formik } from 'formik';
import InputField from 'customs/customForm/InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PreviewImage from '../../PreviewImage';
import Markdown from '../../Markdown';
import NextForm from '../NextForm';

function NewProduct(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.category);
  const [arrSelect, setArrSelect] = useState([]);
  const [detailValue, setDetailValue] = useState('');
  const token = useAuth();
  const isAddMode = true;
  const initialValues = {
    name: '',
    price: '',
    num: '',
    keyProduct: '',
    category_id: '',
  };

  const handleOnSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log({ values, detailValue });
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

  const handleChangeValue = (event, editor) => {
    const data = editor.getData();
    setDetailValue(data);
  };

  return (
    <Home name="Thêm sản phẩm">
      <Container fluid className="px-3">
        <Row>
          <Col md={12}>
            <div className="main-card mt-5">
              <h4 className={clsx('main-card__header', styles.header)}>
                <span className={styles.activeText}>Thêm thông tin</span>
                <span className={clsx('dashed-white ms-3', styles.active)}></span>
                <span className={styles.doted}></span>
                <span className="dashed-white me-3"></span>
                <span>Thêm chi tiết</span>
              </h4>
              <FormikForm
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
                <FormRow arrFileds={arrNameAndPriceProduct} isAddMode />
                <FormRow arrFileds={arrNumAndKeyProduct} isAddMode />
              </FormikForm>

              {/* <NextForm
                onSubmit={handleOnSubmit}
                value={detailValue}
                isAddMode={isAddMode}
                onChangeValue={handleChangeValue}
              /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </Home>
  );
}

NewProduct.propTypes = {};

export default NewProduct;
