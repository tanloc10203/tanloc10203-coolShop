import React from 'react';
import PropTypes from 'prop-types';
import PageRoot from '../PageRoot';
import { Helmet } from 'react-helmet';

function DetailProduct(props) {
  return (
    <PageRoot>
      <Helmet>
        <title>Chi tiết sản phẩm</title>
      </Helmet>
      DetailProduct
    </PageRoot>
  );
}

DetailProduct.propTypes = {};

export default DetailProduct;
