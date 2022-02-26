import { faEye, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from 'components/ProtectRouter';
import Table from 'customs/customTable/Table';
import Home from 'features/Dashboard/pages/Home';
import { deleteProduct, getProduct } from 'features/Dashboard/productSlice';
import { setIsSuccess } from 'features/Dashboard/userSlice';
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { cutTextReplacement, formatPrice, toast } from 'utils';
import ModalTable from '../../container/ModalTable';
import Pagination from '../../container/Pagination';
import RenderPaginationTable from '../../container/RenderPaginationTable';
import ModalPreView from '../ModalPreView';
import styles from './HomeProduct.module.scss';

const listTitle = [
  { title: 'Tên SP' },
  { title: 'Ảnh' },
  { title: 'Giá' },
  { title: 'Gioi thieu' },
  { title: 'Noi dung' },
  { title: 'Danh mục' },
  { title: 'Mã SP' },
  { title: 'Hành động' },
];

function HomeProduct(props) {
  const { loading, dataGet: data, totalPage, isSuccess } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [dataPreview, setDataPreview] = useState(null);
  const token = useAuth();
  const navigate = useNavigate();

  const getProducts = useCallback(() => {
    if (token) dispatch(getProduct({ token, limit: 4, page: page }));
  }, [token, page, dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts, isSuccess]);

  const handleOnChangePage = useCallback((event) => {
    const newPage = event.selected + 1;
    setPage(newPage);
  }, []);

  const handleGetUserDelete = (item) => {
    setItem(item);
    setOpen(true);
  };

  const handleDeleteProduct = async (item) => {
    if (token) {
      const result = await dispatch(deleteProduct({ token, id: item._id }));
      if (result.payload && result.payload?.error === 0) {
        toast.success(`Bạn đã xóa thành công`);
        setOpen(false);
      }
    }
  };

  const handlePreview = (item) => {
    setOpenPreview(true);
    setDataPreview(item);
  };

  const handleOnUpdate = (item) => {
    if (item) navigate('/admin/product/update-product', { replace: true, state: { data: item } });
  };

  const renderProduct = useMemo(() => {
    return (
      <RenderPaginationTable loading={loading}>
        <Table listTitle={listTitle}>
          {data && data.length ? (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label="Tên SP">{item?.name}</td>
                  <td data-label="Ảnh">
                    <img src={item?.thumbnail} alt={item?.name} className={styles.img} />
                  </td>
                  <td data-label="Giá">{formatPrice(item?.price)}</td>
                  <td data-label="Gioi thieu">{cutTextReplacement(item?.disc, 10)}</td>
                  <td data-label="Noi dung">{cutTextReplacement(item?.detail, 10)}</td>
                  <td data-label="Danh mục">{item?.category_id?.name}</td>
                  <td data-label="Mã SP">{item?.key_product}</td>
                  <td data-label="Hành động">
                    <Button
                      size="sm"
                      className="me-1"
                      color="danger"
                      onClick={() => handleGetUserDelete(item)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Button
                      size="sm"
                      className="me-1"
                      color="primary"
                      onClick={() => handleOnUpdate(item)}
                    >
                      <FontAwesomeIcon icon={faPenSquare} />
                    </Button>
                    <Button
                      size="sm"
                      className="me-1"
                      color="warning"
                      onClick={() => handlePreview(item)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8}>Không có sản phẩm</td>
            </tr>
          )}
        </Table>
      </RenderPaginationTable>
    );
  }, [data, loading]);

  return (
    <Home name="Product">
      <main className="main-user">
        <ModalTable
          isOpen={open}
          item={item && item}
          name={item && item.name}
          toggle={() => setOpen(!open)}
          close={handleDeleteProduct}
        />

        <ModalPreView
          data={dataPreview}
          isOpen={openPreview}
          toggle={() => setOpenPreview(!openPreview)}
        />

        <Container fluid className="px-sm-0 px-xs-0 px-md-3">
          <Row>
            <Col>
              <div className="main-card mt-5">
                <div className="main-card__header">Danh sách sản phẩm</div>

                {renderProduct}

                <Pagination
                  page={page}
                  totalPage={totalPage || 0}
                  onChangePage={handleOnChangePage}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Home>
  );
}

HomeProduct.propTypes = {};

export default memo(HomeProduct);
