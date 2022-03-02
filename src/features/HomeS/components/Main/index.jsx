import { useWindowSize } from 'hooks';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Content from '../Content';
import SideBar from '../SideBar';
import './Main.scss';

function Main(props) {
  const [width] = useWindowSize();

  return (
    <main className="mt-3">
      <Container fluid>
        <Row>
          <Col md="12">
            <Row>
              {width >= 1029.89 && (
                <Col md={3}>
                  <SideBar />
                </Col>
              )}
              <Col md={12} lg={width <= 1029 ? 12 : 9}>
                <Content />
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
