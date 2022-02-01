import Table from 'customs/customTable/Table';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { Button, Spinner } from 'reactstrap';
import ModalTable from '../../container/ModalTable';

function TableRole({ data, loading, onCloseRole, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  const listTitle = [{ title: 'Tên quyền' }, { title: 'Mã quyền' }, { title: 'Action' }];

  const handleClose = (items) => {
    setOpen(true);
    setItem(items);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleCloseRole = useCallback(
    (item) => {
      setOpen(false);

      if (!onCloseRole) return;

      onCloseRole(item);
    },
    [onCloseRole]
  );

  return (
    <>
      <ModalTable
        isOpen={open}
        name=""
        item={item && item}
        toggle={handleToggle}
        close={handleCloseRole}
      />

      <div className="main-card">
        <h4 className="main-card__header">Danh sách quyền</h4>

        <Table listTitle={listTitle}>
          {loading ? (
            <tr>
              <td>
                <Spinner />
              </td>
            </tr>
          ) : data && data.length ? (
            data.map((item, index) => {
              let roleIsAction = null;

              if (item.code === 'R1' || item.code === 'R2' || item.code === 'R3') {
                roleIsAction = (
                  <td data-label="Action" colSpan={3}>
                    <Button
                      style={{ pointerEvents: 'none' }}
                      size="sm"
                      className="me-1"
                      color="secondary"
                    >
                      Xóa
                    </Button>
                    <Button
                      size="sm"
                      className="me-1"
                      color="secondary"
                      style={{ pointerEvents: 'none' }}
                    >
                      Sửa
                    </Button>
                  </td>
                );
              } else {
                roleIsAction = (
                  <td data-label="Action">
                    <Button
                      size="sm"
                      className="me-1"
                      color="danger"
                      onClick={() => handleClose(item)}
                    >
                      Xóa
                    </Button>
                    <Button
                      size="sm"
                      className="me-1"
                      color="primary"
                      onClick={() => onUpdate(item)}
                    >
                      Sửa
                    </Button>
                  </td>
                );
              }

              return (
                <tr key={index}>
                  <td data-label="Tên quyền">{item.name}</td>
                  <td data-label="Mã quyền">{item.code}</td>
                  {roleIsAction}
                </tr>
              );
            })
          ) : null}
        </Table>
      </div>
    </>
  );
}

TableRole.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  onCloseRole: PropTypes.func,
  onUpdate: PropTypes.func,
};

TableRole.defaultProps = {
  loading: false,
  onCloseRole: null,
  onUpdate: null,
};

export default TableRole;
