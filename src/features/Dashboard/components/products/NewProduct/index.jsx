import { faBook } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { useAuth } from 'components/ProtectRouter';
import FormikForm from 'customs/customForm/FormikForm';
import FormRow from 'customs/customForm/FormRow';
import { getCategory } from 'features/Dashboard/categorySlice';
import Home from 'features/Dashboard/pages/Home';
import { createProduct, updateProduct } from 'features/Dashboard/productSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { arrNameAndPriceProduct, arrNumAndKeyProduct, validateSchemaProductCreate } from 'utils';
import NextForm from '../NextForm';
import styles from './NewProduct.module.scss';

function NewProduct(props) {
  const token = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.category);
  const { dataCreate, dataUpdate } = useSelector((state) => state.product);
  const [arrSelect, setArrSelect] = useState([]);
  const [detailValue, setDetailValue] = useState('');
  const [prevData, setPrevData] = useState({});
  const [replace, setReplace] = useState(false);
  const [next, setNext] = useState(false);

  const isAddMode = !replace;
  const initialValues = isAddMode
    ? {
        name: '',
        price: '',
        num: '',
        key_product: '',
        category_id: '',
      }
    : Object.keys(prevData).length > 0 && prevData;

  console.log(initialValues);

  useEffect(() => {
    if (token) dispatch(getCategory({ token, key: 'ALL' }));
  }, [dispatch, token]);

  useEffect(() => {
    if (dataCreate && Object.keys(dataCreate).length > 0)
      setPrevData({
        name: dataCreate?.name,
        price: dataCreate?.price,
        num: dataCreate?.num,
        key_product: dataCreate?.key_product,
        category_id: dataCreate?.category_id,
      });
  }, [dataCreate]);

  useEffect(() => {
    if (dataUpdate && Object.keys(dataUpdate).length > 0)
      setPrevData({
        name: dataUpdate?.name,
        price: dataUpdate?.price,
        num: dataUpdate?.num,
        key_product: dataUpdate?.key_product,
        category_id: dataUpdate?.category_id,
      });
  }, [dataUpdate]);

  useEffect(() => {
    let array = [];
    if (data && data.length) {
      data.forEach((item) => array.push({ label: item?.name, value: item?._id }));
      setArrSelect(array);
    }
  }, [data]);

  const handleOnSubmit = (values) => {
    return new Promise((resolve) => {
      if (token) {
        setTimeout(async () => {
          let result = null;
          if (isAddMode) {
            result = await dispatch(createProduct({ token, data: values }));
          } else {
            result = await dispatch(
              updateProduct({ token, id: dataCreate && dataCreate._id, data: values })
            );
          }

          if (result?.payload) {
            const { error } = result?.payload;
            if (error === 0) {
              setNext(true);
            }
          }

          resolve(true);
        }, 1000);
      }
    });
  };

  const handleChangeValue = (event, editor) => {
    const data = editor.getData();
    setDetailValue(data);
  };

  const handleOnCancelForm = () => {
    navigate('/admin/product', { replace: true });
  };

  return (
    <Home name="Thêm sản phẩm">
      <Container fluid className="px-3">
        <Row>
          <Col md={12}>
            <div className="main-card mt-5">
              <h4 className={clsx('main-card__header', styles.header)}>
                <span className={styles.activeText}>
                  {isAddMode ? 'Thêm thông tin' : 'Thay đổi thông tin'}
                </span>
                <span className={clsx('dashed-white ms-3', styles.active)} />
                <span
                  className={clsx(styles.doted, {
                    [styles.activeBorder]: next,
                  })}
                ></span>
                <span
                  className={clsx('dashed-white me-3', {
                    [styles.active]: next,
                  })}
                />
                <span
                  className={clsx({
                    [styles.activeText]: next,
                  })}
                >
                  Thêm chi tiết
                </span>
              </h4>
              {next ? (
                <NextForm
                  onSubmit={handleOnSubmit}
                  value={detailValue}
                  isAddMode={isAddMode}
                  onChangeValue={handleChangeValue}
                  onPrevForm={() => {
                    setNext(false);
                    setReplace(true);
                  }}
                  onCancelForm={handleOnCancelForm}
                />
              ) : (
                <FormikForm
                  initialValues={initialValues}
                  validationSchema={validateSchemaProductCreate}
                  onSubmit={handleOnSubmit}
                  action={isAddMode ? 'Thêm mới' : 'Thay đổi'}
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
                  <FormRow arrFileds={arrNameAndPriceProduct} isAddMode={isAddMode} />
                  <FormRow arrFileds={arrNumAndKeyProduct} isAddMode={isAddMode} />
                </FormikForm>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Home>
  );
}

NewProduct.propTypes = {};

export default NewProduct;
