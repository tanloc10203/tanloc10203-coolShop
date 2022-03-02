import clsx from 'clsx';
import React from 'react';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';
import styles from './Slides.module.scss';

function Slides(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className={clsx(styles.mainSlides)}>
      <Container fluid>
        <Row>
          <Col>
            <Slider {...settings}>
              <div>
                <img
                  src="https://picsum.photos/id/124/1250/400"
                  alt="https://picsum.photos/id/124/1250/400"
                />
              </div>
              <div>
                <img src="https://picsum.photos/id/456/1250/400" alt="https://" />
              </div>
              <div>
                <img
                  src="https://picsum.photos/id/678/1250/400"
                  alt="https://picsum.photos/id/678/1200/400"
                />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Slides.propTypes = {};

export default Slides;
