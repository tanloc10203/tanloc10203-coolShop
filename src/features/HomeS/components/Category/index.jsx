import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Category.module.scss';

function Category(props) {
  return (
    <div className={styles.category}>
      <div className={styles.categoryHeader}>
        <p>Danh mục sản phẩm</p>
      </div>
      <div className={styles.categoryContent}>
        <ul>
          <li>
            <Link to="/" className={styles.active}>
              Máy tính bản
            </Link>
          </li>
          <li>
            <Link to="/">Điện thoại</Link>
          </li>
          <li>
            <Link to="/">Laptop</Link>
          </li>
          <li>
            <Link to="/">Tai nghe</Link>
          </li>
          <li>
            <Link to="/">Thời trang</Link>
          </li>
          <li>
            <Link to="/">Đồ gia dụng</Link>
          </li>
          <li>
            <Link to="/">Thiết bị văn phòng</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Category.propTypes = {};

export default Category;
