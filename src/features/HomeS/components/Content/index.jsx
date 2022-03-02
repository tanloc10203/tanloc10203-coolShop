import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.module.scss';
import FeaturedProducts from '../FeaturedProducts';

function Content(props) {
  return (
    <div className={styles.content}>
      <FeaturedProducts />
    </div>
  );
}

Content.propTypes = {};

export default Content;
