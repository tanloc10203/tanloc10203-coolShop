import Table from 'customs/customTable/Table';
import { PropTypes } from 'prop-types';
import React from 'react';
import { Badge, Button, Spinner } from 'reactstrap';
import { cutTextReplacement, formatDate } from 'utils';
import TooltipItem from './TooltipItem';

function RenderUser({ data, loading, onDeleteUser, onUpdateUser }) {
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

  return (
    <>
      {loading ? (
        <div className="text-center b-center" style={{ height: '239px', padding: 0 }}>
          <Spinner color="info" className="me-1" size="sm" type="grow">
            Loading...
          </Spinner>
          <Spinner color="info" className="me-1" size="sm" type="grow">
            Loading...
          </Spinner>
          <Spinner color="info" size="sm" type="grow">
            Loading...
          </Spinner>
        </div>
      ) : (
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
                        onClick={() => onDeleteUser(item)}
                      >
                        Xóa
                      </Button>
                      <Button
                        size="sm"
                        className="me-1"
                        color="primary"
                        onClick={() => onUpdateUser(item)}
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
      )}
    </>
  );
}

RenderUser.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};

export default RenderUser;
