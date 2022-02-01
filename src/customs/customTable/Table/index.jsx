import React from 'react';
import PropTypes from 'prop-types';
import "./Table.scss";

function Table({ listTitle, children, className }) {
  return (
    <div className={"main-render " + className}>
      <table>
        <thead>
          <tr>
            {listTitle && listTitle.length
              ? listTitle.map((item, i) => (
                <th key={i}>{item.title}</th>
              )) : null
            }
          </tr>
        </thead>
        <tbody>
          {children && children}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  listTitle: PropTypes.array.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.defaultProps = {
  className: "",
}

export default Table;
