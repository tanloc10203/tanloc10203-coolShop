import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import profile from '../../../../../assets/img/profile.jpg';
import styles from './NavResponesive.module.scss';

function NavResponesive({ isOpen, toggle }) {
  return (
    <div>
      <Offcanvas
        className={styles.offcanvas}
        isOpen={isOpen}
        toggle={toggle}
        backdrop
        fade
        direction="start"
        backdropTransition={{ mountOnEnter: true }}
        offcanvasTransition={{ timeout: 300 }}
      >
        <OffcanvasHeader toggle={toggle} className={styles.header}>
          <div className={styles.profile}>
            <img src={profile} alt="" />
          </div>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link className={styles.active} to="/">
                  Trang chủ
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/">Sản phẩm</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/">Thư viện</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/">Giới thiệu</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/">Liên hệ</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/">Đăng nhập</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/">Đăng ký</Link>
              </li>
              <li className={styles.navItem}>
                <Link to="/" className={styles.customCart}>
                  <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Giỏ hàng</span>
                  </span>
                  <span className={styles.customNums}>1</span>
                </Link>
              </li>
            </ul>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

NavResponesive.propTypes = {};

export default NavResponesive;
