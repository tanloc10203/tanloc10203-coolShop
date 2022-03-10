import clsx from 'clsx';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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

  const data = [
    {
      url: 'https://picsum.photos/id/124/1250/400',
      thumb: 'https://picsum.photos/id/124/1250/400',
      width: 1250,
      height: 384,
    },
    {
      url: 'https://picsum.photos/id/456/1250/400',
      thumb: 'https://picsum.photos/id/456/1250/400',
      width: 1250,
      height: 384,
    },
    {
      url: 'https://picsum.photos/id/678/1250/400',
      thumb: 'https://picsum.photos/id/678/1250/400',
      width: 1250,
      height: 384,
    },
  ];

  return (
    <section className={clsx(styles.mainSlides)}>
      <Container fluid>
        <Row>
          <Col>
            <Slider {...settings}>
              {data &&
                data.map((item, index) => (
                  <div key={index}>
                    <LazyLoadImage
                      alt={item.thumb}
                      useIntersectionObserver
                      effect="blur"
                      delayTime={10}
                      height={item.height}
                      src={item.thumb} // use normal <img> attributes as props
                      width={item.width}
                      threshold={10}
                      wrapperClassName="main-img-lazy-load"
                      // placeholderSrc={process.env.PUBLIC_URL + '/logo192.png'}
                    />
                  </div>
                ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Slides.propTypes = {};

export default Slides;
