import {
  faAudioDescription,
  faBook,
  faFileUpload,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { axios } from 'apis';
import clsx from 'clsx';
import { useAuth } from 'components/ProtectRouter';
import FormRow from 'customs/customForm/FormRow';
import InputField from 'customs/customForm/InputField';
import InputSelect from 'customs/customForm/InputSelect';
import { getCategory } from 'features/Dashboard/categorySlice';
import Home from 'features/Dashboard/pages/Home';
import { createProduct, updateProduct } from 'features/Dashboard/productSlice';
import { ErrorMessage, FastField, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from 'reactstrap';
import {
  arrNameAndPriceProduct,
  arrNumAndKeyProduct,
  getBase64,
  toast,
  validateSchemaProductCreate,
} from 'utils';
import Markdown from '../../Markdown';
import PreviewImage from '../../PreviewImage';
import styles from './NewProduct.module.scss';

const url = process.env.REACT_APP_API_URL;
const URL_IMG = process.env.REACT_APP_URL_IMG;

function NewProduct(props) {
  const token = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.category);
  const { dataCreate, dataUpdate } = useSelector((state) => state.product);
  const [arrSelect, setArrSelect] = useState([]);
  const [detailValue, setDetailValue] = useState('');
  const [prevData, setPrevData] = useState({});
  const [filesIMG, setFilesIMG] = useState(null);
  const [imgUrl, setImgUrl] = useState('');

  const isAddMode = true;
  const initialValues = isAddMode
    ? {
        name: '',
        price: '',
        num: '',
        key_product: '',
        category_id: '',
        disc: '',
        thumbnail: '',
      }
    : Object.keys(prevData).length > 0 && prevData;

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

  const handleOnSubmit = (values, { resetForm, setSubmitting }) => {
    return new Promise((resolve) => {
      if (token) {
        setTimeout(async () => {
          let result = null;

          if (isAddMode) {
            if (imgUrl) {
              const newData = {
                ...values,
                detail: detailValue,
                thumbnail: `${URL_IMG}${imgUrl}`,
              };

              console.log(newData);

              const results = await dispatch(createProduct({ token, data: newData }));

              if (results.payload && results.payload?.error === 0) {
                toast.success('Thêm sản phẩm thành công');
                resetForm();
                navigate('/admin/product', { replace: true });
              }
            } else toast.warning('Vui lòng Upload Ảnh!!!');
          } else {
            result = await dispatch(
              updateProduct({ token, id: dataCreate && dataCreate._id, data: values })
            );
          }

          if (result?.payload) {
            const { error } = result?.payload;
            if (error === 0) {
              resetForm();
            }
          }
          setSubmitting(false);
          resolve(true);
        }, 1000);
      }
    });
  };

  const handleChangeValue = (event, editor) => {
    const data = editor.getData();
    setDetailValue(data);
  };

  const handleUploadImg = async () => {
    if (filesIMG) {
      try {
        const formData = new FormData();
        formData.append('files', filesIMG);
        const response = await axios.post(`${url}admin/upload`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response && response?.filename) {
          toast.success('Upload ảnh thành công.');
          setImgUrl(response.filename);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Home name="Thêm sản phẩm">
      <Container fluid className="px-3">
        <Row>
          <Col md={12}>
            <div className="main-card mt-5">
              <h4 className="main-card__header">Thêm mới</h4>

              <Formik
                initialValues={initialValues}
                validationSchema={validateSchemaProductCreate}
                onSubmit={handleOnSubmit}
              >
                {({ isSubmitting, errors, values, touched, setFieldValue }) => {
                  // console.log({ errors, values, touched });

                  const showError = errors['thumbnail'] && touched['thumbnail'] ? true : false;
                  const notError = values['thumbnail'] && !errors['thumbnail'] ? true : false;

                  // console.log({ showError, notError });

                  return (
                    <Form>
                      <FormRow
                        arrFileds={arrNameAndPriceProduct}
                        isAddMode={isAddMode === 'ADD' ? true : false}
                      />
                      <FormRow
                        arrFileds={arrNumAndKeyProduct}
                        isAddMode={isAddMode === 'ADD' ? true : false}
                      />

                      <FastField
                        icon={faAudioDescription}
                        type="textarea"
                        cols={30}
                        rows={20}
                        label="Giới thiệu sản phẩm"
                        name="disc"
                        component={InputField}
                        required
                      />

                      <Label>
                        <FontAwesomeIcon className="text-muted" icon={faInfo} />{' '}
                        <span className="text-muted">{'Chi tiết sản phẩm'}</span>
                        <span className="text-danger">(*)</span>
                      </Label>

                      <Markdown value={detailValue} onChangeValueInput={handleChangeValue} />

                      <FormGroup>
                        <Label htmlFor={'thumbnail'}>
                          <FontAwesomeIcon className="text-muted mt-3" icon={faFileUpload} />
                          <span className="text-muted">{'Thêm ảnh tiêu đề'}</span>
                          <span className="text-danger">
                            (*) Vui lòng Upload Ảnh trước khi Thêm mới
                          </span>
                        </Label>

                        <Input
                          invalid={showError}
                          type="file"
                          name="thumbnail"
                          valid={notError}
                          onChange={(event) => {
                            setFieldValue('thumbnail', event.target.files[0]);
                            setFilesIMG(event.target.files[0]);
                          }}
                          id="thumbnail"
                        />

                        <span
                          onClick={handleUploadImg}
                          className={clsx('fw-bold', styles.customBtn)}
                        >
                          Upload Ảnh
                        </span>

                        <ErrorMessage name="thumbnail" component={FormFeedback} />
                      </FormGroup>

                      {values && values.thumbnail && <PreviewImage files={values.thumbnail} />}

                      <InputSelect
                        name="category_id"
                        arrOptions={arrSelect}
                        label="Danh mục"
                        icon={faBook}
                        labelFirst="Chọn danh mục"
                        values={values}
                        errors={errors}
                        touched={touched}
                        required
                      />

                      <Button type="submit" color="primary">
                        {isSubmitting ? (
                          <>
                            <Spinner className="m-1" type="grow" size="sm" />
                            <Spinner className="m-1" type="grow" size="sm" />
                            <Spinner className="m-1" type="grow" size="sm" />
                          </>
                        ) : (
                          'Thêm mới'
                        )}
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </Home>
  );
}

NewProduct.propTypes = {};

export default NewProduct;
