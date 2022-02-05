import Table from 'customs/customTable/Table';
import Home from 'features/Dashboard/pages/Home';
import { deleteUser, getUser } from 'features/Dashboard/userSlice';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Col, Container, Row } from 'reactstrap';
import { cutTextReplacement, formatDate, toast } from 'utils';
import ModalTable from '../../container/ModalTable';
import Pagination from '../../container/Pagination';
import RenderPaginationTable from '../../container/RenderPaginationTable';
import TooltipItem from '../../container/RenderPaginationTable/TooltipItem';

const listTitle = [
  { title: 'Full name' },
  { title: 'Email' },
  { title: 'Moblie' },
  { title: 'Address' },
  { title: 'Role' },
  { title: 'Created at' },
  { title: 'Updated at' },
  { title: 'Action' },
];

function HomeUser() {
  const { data, totalPage, loading, isSuccess } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
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

  const handleGetUserDelete = useCallback((user) => {
    setOpen(true);
    setItem(user);
  }, []);

  const handleDeleteUser = useCallback(
    (user) => {
      setOpen(false);
      const token = localStorage.getItem('token');

      if (token) {
        dispatch(deleteUser({ id: user._id, token }));
      } else {
        toast.error('Phiên đăng nhập đã hết hạn!');
      }
    },
    [dispatch]
  );

  const handleUpdateUser = useCallback(
    (user) => {
      user && navigate('/admin/user/update-user', { replace: true, state: { user } });
    },
    [navigate]
  );

  const renderListUser = useMemo(() => {
    return (
      <RenderPaginationTable loading={loading}>
        <Table listTitle={listTitle}>
          {data && data.length
            ? data.map((item, index) => {
                let role = null;
                let actionIsNotAdmin = null;

                switch (item.role_id.code) {
                  case 'R1':
                    role = <Badge color="primary">{item.role_id.name}</Badge>;
                    break;
                  case 'R2':
                    role = <Badge color="secondary">{item.role_id.name}</Badge>;
                    break;
                  case 'R3':
                    role = <Badge color="success">{item.role_id.name}</Badge>;
                    break;
                  default:
                    role = <Badge color="info">{item.role_id.name}</Badge>;
                }

                if (item.role_id.code === 'R1') {
                  actionIsNotAdmin = (
                    <td data-label="Action">
                      <Button
                        style={{ pointerEvents: 'none' }}
                        size="sm"
                        className="me-1"
                        color="secondary"
                      >
                        Xóa
                      </Button>
                      <Button
                        style={{ pointerEvents: 'none' }}
                        size="sm"
                        className="me-1"
                        color="secondary"
                      >
                        Sửa
                      </Button>
                    </td>
                  );
                } else {
                  actionIsNotAdmin = (
                    <td data-label="Action">
                      <Button
                        size="sm"
                        className="me-1"
                        color="danger"
                        onClick={() => handleGetUserDelete(item)}
                      >
                        Xóa
                      </Button>
                      <Button
                        size="sm"
                        className="me-1"
                        color="primary"
                        onClick={() => handleUpdateUser(item)}
                      >
                        Sửa
                      </Button>
                    </td>
                  );
                }

                return (
                  <tr key={index}>
                    <td data-label="Full name">
                      <div id={'Tooltip-name-' + index}>
                        {cutTextReplacement(item.fullname, 13)}
                      </div>
                      <TooltipItem
                        item={{ text: item.fullname }}
                        target={'Tooltip-name-' + index}
                      />
                    </td>
                    <td data-label="Email">{item.email}</td>
                    <td data-label="Moblie">{item.phone_number}</td>
                    <td data-label="Address">
                      <div id={'Tooltip-' + index}>{cutTextReplacement(item.address, 10)}</div>
                      <TooltipItem item={{ text: item.address }} target={'Tooltip-' + index} />
                    </td>
                    <td data-label="Role">{role}</td>
                    <td data-label="Created at">{formatDate(item.createdAt)}</td>
                    <td data-label="Updated at">{formatDate(item.updatedAt)}</td>
                    {actionIsNotAdmin}
                  </tr>
                );
              })
            : null}
        </Table>
      </RenderPaginationTable>
    );
  }, [data, loading, handleGetUserDelete, handleUpdateUser]);

  const handleOnChangePage = useCallback((event) => {
    const newPage = event.selected + 1;
    setPage(newPage);
  }, []);

  return (
    <Home name="Quản lý người dùng">
      <main className="main-user">
        <ModalTable
          isOpen={open}
          item={item && item}
          name={item && item.fullname}
          toggle={() => setOpen(!open)}
          close={handleDeleteUser}
        />
        <Container fluid className="px-sm-0 px-xs-0 px-md-3">
          <Row>
            <Col>
              <div className="main-card mt-5">
                <div className="main-card__header">Danh sách thành viên</div>

                {renderListUser}

                <Pagination page={page} totalPage={totalPage} onChangePage={handleOnChangePage} />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </Home>
  );
}

export default HomeUser;
