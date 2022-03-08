import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Input, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBahai,
  faEnvelope,
  faMapMarked,
  faMapMarkerAlt,
  faPhoneAlt,
  faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import styles from './FooterAndCopyright.module.scss';

function FooterAndCopyright(props) {
  return (
    <>
      <footer className={styles.footer}>
        <Container fluid>
          <Row>
            <Col md={6} lg={3}>
              <Link to="/" className={styles.footerLogo}>
                <FontAwesomeIcon icon={faBahai} />
                <span>EndCool</span>
              </Link>
              <p>
                ENDCOOL luôn cung cấp luôn là sản phẩm chính hãng có thông tin rõ ràng, chính sách
                ưu đãi cực lớn cho khách hàng có thẻ thành viên.
              </p>
            </Col>
            <Col md={6} lg={3}>
              <h4 className={styles.footerHeader}>Thông tin cửa hàng</h4>
              <ul className={styles.listAddresses}>
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>106 - Trần Bình - Cầu Giấy - Hà Nội</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <p>0111.222.333 - 0000.111.222</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p>ginga550504@gmail.com</p>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={3}>
              <h4 className={styles.footerHeader}>Chính sách mua hàng</h4>
              <ul className={styles.listItem}>
                <li>
                  <Link to="/" title="">
                    Quy định - chính sách
                  </Link>
                </li>
                <li>
                  <Link to="/" title="">
                    Chính sách bảo hành - đổi trả
                  </Link>
                </li>
                <li>
                  <Link to="/" title="">
                    Chính sách hội viện
                  </Link>
                </li>
                <li>
                  <Link to="/" title="">
                    Giao hàng - lắp đặt
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={6} lg={3}>
              <h3 className={styles.footerHeader}>Bảng tin</h3>
              <p className="desc">Đăng ký với chung tôi để nhận được thông tin ưu đãi sớm nhất</p>
              <div className={styles.formReg}>
                <Input type="email" name="email" id="email" placeholder="Nhập email tại đây" />
                <Button type="submit" id="sm-reg" color="primary">
                  Đăng ký
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="bg-primary text-light py-1">
        <p className="text-center m-0">&copy; Bản quyền thuộc về ENDCOOL</p>
      </div>
    </>
  );
}

FooterAndCopyright.propTypes = {};

export default FooterAndCopyright;
