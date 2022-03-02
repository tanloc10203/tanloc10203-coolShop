import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import './Main.scss';
import SideBar from '../SideBar';

function Main(props) {
  return (
    <main className="mt-3">
      <Container fluid>
        <Row>
          <Col md="12">
            <Row>
              <Col md={3}>
                <SideBar />
              </Col>
              <Col md={9}>
                <div className="content">Content</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

Main.propTypes = {};

export default Main;
