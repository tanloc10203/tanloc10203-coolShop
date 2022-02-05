import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.errorPage}>
      <div className={styles.pageImage}></div>
      <Container className="text-center">
        <Row>
          <Col md={12}>
            <h1 className={styles.title}>404</h1>
            <p className="lead">Page not found :(</p>
            <h4 className={styles.description}>Ooooups! Looks like you got lost.</h4>
            <Link to="/">Back to Home</Link>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
}

export default NotFound;
