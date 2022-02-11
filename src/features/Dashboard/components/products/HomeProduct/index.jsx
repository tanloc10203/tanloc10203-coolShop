import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Home from 'features/Dashboard/pages/Home';
import Markdown from '../../Markdown';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import RenderPaginationTable from '../../container/RenderPaginationTable';
import Table from 'customs/customTable/Table';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'components/ProtectRouter';
import { getProduct } from 'features/Dashboard/productSlice';
import ModalTable from '../../container/ModalTable';
import Pagination from '../../container/Pagination';
import { formatDate, formatPrice } from 'utils';

const listTitle = [
  { title: 'Tên SP' },
  { title: 'Ảnh' },
  { title: 'Giá' },
  { title: 'Danh mục' },
  { title: 'Mã SP' },
  { title: 'Ngày tạo' },
  { title: 'Ngày cập nhật' },
  { title: 'Hành động' },
];

function HomeProduct(props) {
  const { loading, dataGet: data, totalPage } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const token = useAuth();

  useEffect(() => {
    if (token) dispatch(getProduct({ token, limit: 3, page: page }));
  }, [token, page, dispatch]);

  const handleOnChangePage = useCallback((event) => {
    const newPage = event.selected + 1;
    setPage(newPage);
  }, []);

  const renderProduct = useMemo(() => {
    return (
      <RenderPaginationTable loading={loading}>
        <Table listTitle={listTitle}>
          {data &&
            data.length &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td data-label="Tên SP">{item?.name}</td>
                  <td data-label="Ảnh">{item?.thumbnail}</td>
                  <td data-label="Giá">{formatPrice(item?.price)}</td>
                  <td data-label="Danh mục">{item?.category_id?.name}</td>
                  <td data-label="Mã SP">{item?.key_product}</td>
                  <td data-label="Ngày tạo">{formatDate(item?.createdAt)}</td>
                  <td data-label="Ngày cập nhật">{formatDate(item?.updatedAt)}</td>
                  <td data-label="Hành động">
                    <Button
                      size="sm"
                      className="me-1"
                      color="danger"
                      // onClick={() => handleGetUserDelete(item)}
                    >
                      Xóa
                    </Button>
                    <Button
                      size="sm"
                      className="me-1"
                      color="primary"
                      // onClick={() => handleUpdateUser(item)}
                    >
                      Sửa
                    </Button>
                  </td>
                </tr>
              );
            })}
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
          name={item && item.fullname}
          toggle={() => setOpen(!open)}
          // close={handleDeleteUser}
        />
        <Container fluid className="px-sm-0 px-xs-0 px-md-3">
          <Row>
            <Col>
              <div className="main-card mt-5">
                <div className="main-card__header">Danh sách thành viên</div>

                {renderProduct}

                <Pagination page={page} totalPage={totalPage} onChangePage={handleOnChangePage} />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Home>
  );
}

HomeProduct.propTypes = {};

export default HomeProduct;
