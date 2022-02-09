import React from 'react';
import PropTypes from 'prop-types';
import Home from 'features/Dashboard/pages/Home';
import Markdown from '../../Markdown';

function HomeProduct(props) {
  return (
    <Home name="Product">
      {' '}
      <Markdown />
    </Home>
  );
}

HomeProduct.propTypes = {};

export default HomeProduct;
