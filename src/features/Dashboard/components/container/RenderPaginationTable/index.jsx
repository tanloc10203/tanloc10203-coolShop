import { PropTypes } from 'prop-types';
import React from 'react';
import { Spinner } from 'reactstrap';

function RenderPaginationTable({ loading, children }) {
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
        children
      )}
    </>
  );
}

RenderPaginationTable.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default RenderPaginationTable;
