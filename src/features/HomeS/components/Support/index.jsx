import React from 'react';
import PropTypes from 'prop-types';
import { imgDetail } from 'utils';
import styles from './Support.module.scss';
import { Col, Container, Row } from 'reactstrap';

function Support(props) {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className={styles.support}>
            <ul>
              <li>
                <img src={imgDetail.icon1} alt="" />
                <h6>Miễn phí vận chuyển</h6>
                <span className="text-muted">Tới tận tai khách hàng</span>
              </li>
              <li>
                <img src={imgDetail.icon2} alt="" />
                <h6>Tư vấn 24/7</h6>
                <span className="text-muted">1900.9999</span>
              </li>
              <li>
                <img src={imgDetail.icon3} alt="" />
                <h6>Tiết kiệm hơn</h6>
                <span className="text-muted">Với nhiều ưu đãi cực lớn</span>
              </li>
              <li>
                <img src={imgDetail.icon4} alt="" />
                <h6>Thanh toán nhanh</h6>
                <span className="text-muted">Hỗ trợ nhiều hình thức</span>
              </li>
              <li>
                <img src={imgDetail.icon5} alt="" />
                <h6>Đặt hàng online</h6>
                <span className="text-muted">Thao tác đơn giản</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

Support.propTypes = {};

export default Support;
