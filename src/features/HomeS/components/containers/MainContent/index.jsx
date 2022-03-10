import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import clsx from 'clsx';
import bg from '../../../../../assets/img/book-cool-end-floral-Favim.com-740262.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './MainContent.module.scss';

function MainContent({ children }) {
  return (
    <Container fluid>
      <main className={clsx('mt-3 bg-white px-3', styles.main)}>
        <Row>
          <Col>
            <Row>
              <Col lg={5} md={12} className="p-3">
                <LazyLoadImage
                  alt={bg}
                  useIntersectionObserver
                  effect="blur"
                  delayTime={10}
                  height={'auto'}
                  src={bg} // use normal <img> attributes as props
                  width={'100%'}
                  threshold={10}
                  wrapperClassName="main-img-lazy-load"
                  // placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
                />
              </Col>
              <Col lg={7} md={12} className="mt-3">
                {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
