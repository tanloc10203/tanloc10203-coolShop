import {
  faBahai,
  faIndent,
  faSearch,
  faShoppingCart,
  faTh,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useWindowScroll, useWindowSize } from 'hooks';
import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import NavResponesive from '../NavResponesive';
import styles from './Header.module.scss';

function Header(props) {
  const offset = useWindowScroll();
  const [open, setOpen] = useState(false);
  const [width] = useWindowSize();

  useLayoutEffect(() => {
    let unmounted = false;
    if (width >= 1268) !unmounted && open && setOpen(false);
    return () => (unmounted = true);
  }, [width, open]);

  return (
    <>
      <div
        className={clsx(styles.headerWp, {
          [styles.active]: offset > 0,
        })}
      >
        <header className={styles.mainHeader}>
          <Container>
            <Row>
              <Col>
                <div className={styles.header}>
                  <Link to="/" className={styles.headerLeft}>
                    <FontAwesomeIcon icon={faBahai} />
                    <span>EndCool</span>
                  </Link>
                  <div className={styles.headerRight}>
                    <span className="customHoverIcon">
                      <FontAwesomeIcon icon={faSearch} className={styles.iconHiddenSm} />
                    </span>
                    <div>
                      <span className="customHoverIcon">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </span>
                      <span className={styles.customNums}>1</span>
                    </div>
                    <span className="customHoverIcon">
                      <FontAwesomeIcon icon={faUser} className={styles.iconHiddenSm} />
                    </span>
                    <span className={clsx(styles.iconOnSm)}>
                      <FontAwesomeIcon icon={faIndent} onClick={() => setOpen(true)} />
                    </span>
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
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.headerResponse}>
        <Container>
          <Row>
            <Col md="12">
              <div className={clsx(styles.headerResponseMain)}>
                <div className={styles.group}>
                  <Input placeholder="Nhập từ khóa tìm kiếm" className="col-3" />
                </div>
                <Label>
                  <span className="customHoverIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </Label>
                <div>
                  <span className="customHoverIcon">
                    <FontAwesomeIcon icon={faTh} className={styles.itemRight} />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <NavResponesive isOpen={open} toggle={() => setOpen(!open)} />
    </>
  );
}

Header.propTypes = {};

export default Header;
