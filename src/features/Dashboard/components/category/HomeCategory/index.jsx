import { useAuth } from 'components/ProtectRouter';
import Table from 'customs/customTable/Table';
import { deleteCategory, getCategory } from 'features/Dashboard/categorySlice';
import Home from 'features/Dashboard/pages/Home';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { formatDate, toast } from 'utils';
import ModalTable from '../../container/ModalTable';
import Pagination from '../../container/Pagination';
import RenderPaginationTable from '../../container/RenderPaginationTable';

const listTitle = [
  { title: 'Tên danh mục' },
  { title: 'Ngày tạo' },
  { title: 'Ngày cập nhật' },
  { title: 'Hành động' },
];

function HomeCategory(props) {
  const { loading, data, totalPage, isSuccess } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useAuth();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);

  const getLimitCategory = useCallback(() => {
    if (token) {
      dispatch(getCategory({ token, page, limit: 5, key: 'Limit' }));
    }
  }, [token, dispatch, page]);

  useEffect(() => {
    isSuccess && getLimitCategory();
  }, [getLimitCategory, isSuccess]);

  useEffect(() => {
    getLimitCategory();
  }, [getLimitCategory]);

  const handleOnChangePage = useCallback((event) => {
    const newPage = event.selected + 1;
    setPage(newPage);
  }, []);

  const handleDeleteUser = async (cat) => {
    if (cat) {
      setOpen(false);
      const response = await dispatch(deleteCategory({ token, id: cat._id }));

      const { payload } = response;
      if (payload && payload.error === 0) {
        toast.success(`Xóa thành công ${cat.name}`);
      }
    }
  };

  const handleOnDelete = (cat) => {
    if (cat) {
      setItem(cat);
      setOpen(true);
    }
  };

  const handleOnUpdate = (cat) => {
    console.log(cat);
    if (cat) {
      navigate('/admin/category/update', { replace: true, state: cat });
    }
  };

  const renderListCategory = useMemo(() => {
    return (
      <RenderPaginationTable loading={loading}>
        <Table listTitle={listTitle}>
          {data &&
            data.length &&
            data.map((item, index) => (
              <tr key={index}>
                <td data-label="Tên">{item.name}</td>
                <td data-label="Ngày tạo">{formatDate(item.createdAt)}</td>
                <td data-label="Ngày cập nhật">{formatDate(item.updatedAt)}</td>
                <td data-label="Hành động">
                  <Button
                    size="sm"
                    className="me-1"
                    color="danger"
                    onClick={() => handleOnDelete(item)}
                  >
                    Xóa
                  </Button>
                  <Button
                    size="sm"
                    className="me-1"
                    color="primary"
                    onClick={() => handleOnUpdate(item)}
                  >
                    Sửa
                  </Button>
                </td>
              </tr>
            ))}
        </Table>
      </RenderPaginationTable>
    );
  }, [loading, data]);

  return (
    <Home name="Quản lý danh mục">
      <main>
        <ModalTable
          isOpen={open}
          item={item && item}
          name={item && item.name}
          toggle={() => setOpen(!open)}
          close={handleDeleteUser}
        />
        <Container fluid className="px-sm-0 px-xs-0 px-md-3">
          <Row>
            <Col>
              <div className="main-card mt-5">
                <div className="main-card__header">Danh sách danh mục</div>

                {renderListCategory}

                <Pagination page={page} totalPage={totalPage} onChangePage={handleOnChangePage} />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Home>
  );
}

HomeCategory.propTypes = {};

export default HomeCategory;
