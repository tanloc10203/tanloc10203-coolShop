import React from 'react';
import PropTypes from 'prop-types';
import PageRoot from '../PageRoot';
import { Helmet } from 'react-helmet';

function Product(props) {
  return (
    <PageRoot>
      <Helmet>
        <title>Sản phẩm</title>
      </Helmet>
      Product
    </PageRoot>
  );
}

Product.propTypes = {};

export default Product;
