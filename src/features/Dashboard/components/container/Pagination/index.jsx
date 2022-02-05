import ReactPaginate from 'react-paginate';
import { PropTypes } from 'prop-types';

function Pagination({ page, totalPage, onChangePage }) {
  return (
    <ReactPaginate
      className="justify-content-end pagination"
      pageCount={totalPage}
      onPageChange={onChangePage}
      forcePage={page === 0 ? 0 : page - 1}
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
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
