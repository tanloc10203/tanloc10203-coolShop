import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { faBahai, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <header className={styles.mainHeader}>
        <Container>
          <Row>
            <Col>
              <div className={styles.header}>
                <Link to="/" className={styles.headerLeft}>
                  <FontAwesomeIcon icon={faBahai} />
                  <span>
                    End<span>Cool</span>
                  </span>
                </Link>
                <div className={styles.headerRight}>
                  <FontAwesomeIcon icon={faSearch} />
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row>
          <Col>
            <div className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link className={styles.active} to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link to="/">Danh mục</Link>
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
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Header.propTypes = {};

export default Header;
