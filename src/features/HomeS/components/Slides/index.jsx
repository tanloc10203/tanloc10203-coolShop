import React from 'react';
import Slider from 'react-slick';
import { Col, Container, Row } from 'reactstrap';

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
  };

  return (
    <section className="main-slides mt-2">
      <Container>
        <Row>
          <Col>
            <Slider {...settings}>
              <div>
                <img
                  src="https://picsum.photos/id/124/300/400"
                  alt="https://picsum.photos/id/124/300/400"
                />
              </div>
              <div>
                <img src="https://picsum.photos/id/456/300/400" alt="https://" />
              </div>
              <div>
                <img
                  src="https://picsum.photos/id/678/300/400"
                  alt="https://picsum.photos/id/678/300/400"
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
