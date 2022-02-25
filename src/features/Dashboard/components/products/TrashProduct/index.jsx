import { faRedo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from 'components/ProtectRouter';
import Table from 'customs/customTable/Table';
import Home from 'features/Dashboard/pages/Home';
import { deleteProduct, getProduct, updateProduct } from 'features/Dashboard/productSlice';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { cutTextReplacement, formatPrice, toast } from 'utils';
import ModalTable from '../../container/ModalTable';
import Pagination from '../../container/Pagination';
import RenderPaginationTable from '../../container/RenderPaginationTable';
import styles from '../HomeProduct/HomeProduct.module.scss';

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

function TrashProduct(props) {
  const { loading, dataGet: data, totalPage, isSuccess } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const token = useAuth();

  const getProducts = useCallback(() => {
    if (token) dispatch(getProduct({ token, limit: 4, page: page, deleteInput: true }));
  }, [token, page, dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    isSuccess && getProducts();
  }, [isSuccess, getProducts]);

  const handleOnChangePage = useCallback((event) => {
    const newPage = event.selected + 1;
    setPage(newPage);
  }, []);

  const handleGetProductDelete = (item) => {
    setItem(item);
    setOpen(true);
  };

  const handleDeleteProduct = async (item) => {
    if (token) {
      const result = await dispatch(deleteProduct({ token, id: item._id, deleteInput: true }));
      if (result.payload && result.payload?.error === 0) {
        toast.success(`Bạn đã xóa vĩnh viễn`);
        setOpen(false);
      }
    }
  };

  const handleRecoverProduct = useCallback(
    async (item) => {
      if (token) {
        const result = await dispatch(updateProduct({ token, id: item._id, recover: true }));
        if (result.payload && result.payload?.error === 0) {
          toast.success(`Khôi phục thành công`);
          navigate('/admin/product', { replace: true });
          setOpen(false);
        }
      }
    },
    [navigate, token, dispatch]
  );

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
                      onClick={() => handleGetProductDelete(item)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Button
                      size="sm"
                      className="me-1"
                      color="primary"
                      onClick={() => handleRecoverProduct(item)}
                    >
                      <FontAwesomeIcon icon={faRedo} />
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
  }, [data, loading, handleRecoverProduct]);

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
        <Container fluid className="px-sm-0 px-xs-0 px-md-3">
          <Row>
            <Col>
              <div className="main-card mt-5">
                <div className="main-card__header">Danh sách sản phẩm đã xóa</div>

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

TrashProduct.propTypes = {};

export default TrashProduct;
