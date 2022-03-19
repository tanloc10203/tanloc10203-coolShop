import BreadCrumbChange from 'features/HomeS/components/BreadCrumbChange';
import ContentProduct from 'features/HomeS/components/ContentProduct';
import FilterSideBar from 'features/HomeS/components/FilterSideBar';
import SideBar from 'features/HomeS/components/SideBar';
import { useWindowSize } from 'hooks';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import PageRoot from '../PageRoot';

function Product(props) {
  const [width] = useWindowSize();

  return (
    <>
      <Helmet>
        <title>Sản phẩm</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col>
            <main className="product mt-3">
              <BreadCrumbChange name="Sản phẩm" />
              <Row>
                <Col md="12">
                  <Row>
                    {width >= 1029.89 && (
                      <Col md={3}>
                        <SideBar />
                        <FilterSideBar />
                      </Col>
                    )}
                    <Col md={12} lg={width <= 1029 ? 12 : 9}>
                      <ContentProduct />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </main>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </>
  );
}

Product.propTypes = {};

export default Product;
