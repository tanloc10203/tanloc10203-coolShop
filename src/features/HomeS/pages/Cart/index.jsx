import React from 'react';
import PropTypes from 'prop-types';
import PageRoot from '../PageRoot';
import { Helmet } from 'react-helmet';

function Cart(props) {
  return (
    <PageRoot>
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <h1 className="text-center text-danger">Giỏ hàng</h1>
    </PageRoot>
  );
}

Cart.propTypes = {};

export default Cart;
