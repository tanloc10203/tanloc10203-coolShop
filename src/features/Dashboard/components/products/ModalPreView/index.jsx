import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';

import styles from './ModalPreView.module.scss';
import { formatPrice } from 'utils';

function ModalPreView({ isOpen, toggle, data }) {
  return (
    <Modal fade size="xl" fullscreen centered isOpen={isOpen} toggle={toggle} className={''}>
      <ModalHeader toggle={toggle}>Chi tiết sản phẩm</ModalHeader>
      <ModalBody>
        <Container fluid>
          <Row>
            <Col md="4" sm="12">
              <div className={styles.background}>
                <img src={data?.thumbnail} alt="" className={styles.img} />
              </div>
            </Col>
            <Col md="8" sm="12">
              <h4>{data?.name}</h4>
              <div>
                <span className="fw-bold"> Giá: </span>
                <span>{formatPrice(data?.price)}</span>
              </div>
              <div>
                <span className="fw-bold"> Giới thiệu sản phẩm: </span>
                <span>{data?.disc}</span>
              </div>
            </Col>
            <Col md="12 mt-2">
              <h2>Thông tin chi tiết</h2>
              <div dangerouslySetInnerHTML={{ __html: data?.detail }} />
            </Col>
          </Row>
        </Container>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Trở về
        </Button>
      </ModalFooter>
    </Modal>
  );
}

ModalPreView.propTypes = {};

export default ModalPreView;
