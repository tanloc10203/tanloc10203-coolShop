import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLink from 'components/CustomLink';
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
                <CustomLink to="/">Trang chủ</CustomLink>
              </li>
              <li className={styles.navItem}>
                <CustomLink to="/product">Sản phẩm</CustomLink>
              </li>
              <li className={styles.navItem}>
                <CustomLink to="/blog">Blog</CustomLink>
              </li>
              <li className={styles.navItem}>
                <CustomLink to="/introduce">Giới thiệu</CustomLink>
              </li>
              <li className={styles.navItem}>
                <CustomLink to="/contact">Liên hệ</CustomLink>
              </li>
              <li className={styles.navItem}>
                <CustomLink to="/login">Đăng nhập</CustomLink>
              </li>
              <li className={styles.navItem}>
                <CustomLink to="/register">Đăng ký</CustomLink>
              </li>
              <li className={styles.navItem}>
                <CustomLink to="/cart" className={styles.customCart}>
                  <span>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>Giỏ hàng</span>
                  </span>
                  <span className={styles.customNums}>1</span>
                </CustomLink>
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
