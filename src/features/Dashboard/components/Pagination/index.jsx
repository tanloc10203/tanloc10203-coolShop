import { deleteUser, getUser } from "features/Dashboard/userSlice";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import RenderUser from "../RenderUser";
import { toast } from "utils";
import { useNavigate } from "react-router-dom";
import ModalTable from "../ModalTable";

function Pagination() {
  const dispatch = useDispatch();
  const { data, totalPage, loading, isSuccess } = useSelector(state => state.user);
  const [page, setPage] = useState(1);
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getUsers = (page) => {
      const token = localStorage.getItem('token');
      token !== null && token && dispatch(getUser({ page: page, limit: 5, token }));
    };

    if (page || isSuccess) {
      getUsers(page);
    }
  }, [dispatch, page, isSuccess]);

  const handleOnChangePage = useCallback((event) => {
    const newPage = event.selected + 1;
    setPage(newPage);
  }, []);

  const handleGetUserDelete = useCallback(user => {
    setOpen(true);
    setItem(user);
  }, []);

  const handleDeleteUser = useCallback((user) => {
    setOpen(false);
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(deleteUser({ id: user._id, token }));
    } else {
      toast.error("Phiên đăng nhập đã hết hạn!");
    }
  }, [dispatch]);

  const handleUpdateUser = useCallback((user) => {
    user && navigate("/admin/user/update-user", { replace: true, state: { user } });
  }, [navigate]);

  const renderListUser = useMemo(() => {
    return <RenderUser
      data={data || []}
      loading={loading}
      onDeleteUser={handleGetUserDelete}
      onUpdateUser={handleUpdateUser}
    />
  }, [data, loading, handleGetUserDelete, handleUpdateUser]);


  return (
    <main className="main-user">
      <ModalTable
        isOpen={open}
        item={item && item}
        name={item && item.fullname}
        toggle={() => setOpen(!open)}
        close={handleDeleteUser}
      />
      <Container fluid className="px-sm-0 px-xs-0 px-md-3">
        <Row >
          <Col>
            <div className="main-card mt-5">
              <div className="main-card__header">Danh sách thành viên</div>

              {renderListUser}

              <ReactPaginate
                className="justify-content-end pagination"
                pageCount={totalPage}
                onPageChange={handleOnChangePage}
                forcePage={page - 1}
                previousLabel="&lt;"
                nextLabel="&gt;"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </main >
  );
}

export default memo(Pagination);
