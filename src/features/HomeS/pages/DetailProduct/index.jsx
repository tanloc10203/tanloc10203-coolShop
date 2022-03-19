import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageRoot from '../PageRoot';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Row } from 'reactstrap';
import BreadCrumbChange from 'features/HomeS/components/BreadCrumbChange';
import { useWindowSize } from 'hooks';
import SideBar from 'features/HomeS/components/SideBar';
import { imgFeaturedProduct } from 'utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './DetailProduct.module.scss';
import Slider from 'react-slick';

function DetailProduct(props) {
  const [width] = useWindowSize();
  const [srcImg, setSrcImg] = useState(false);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    touchMove: true,
  };

  const dataImg = [
    {
      id: 1,
      src: imgFeaturedProduct.thumb1,
    },
    {
      id: 2,
      src: imgFeaturedProduct.thumb2,
    },
    {
      id: 3,
      src: imgFeaturedProduct.thumb3,
    },
    {
      id: 4,
      src: imgFeaturedProduct.thumb4,
    },
    {
      id: 5,
      src: imgFeaturedProduct.thumb5,
    },
  ];

  const handleChangeSrcImg = (src) => {
    setSrcImg(src);
  };

  return (
    <PageRoot>
      <Helmet>
        <title>Chi tiết sản phẩm</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col>
            <BreadCrumbChange name="Điện thoại" />
            <Row>
              {width >= 1029.89 && (
                <Col md={3}>
                  <div className="main-sidebar">
                    <SideBar />
                  </div>
                </Col>
              )}
              <Col md={12} lg={width <= 1029 ? 12 : 9}>
                <section className={styles.product}>
                  <div className={styles.productLeft}>
                    <LazyLoadImage
                      alt={!srcImg ? imgFeaturedProduct.thumb6 : srcImg}
                      useIntersectionObserver
                      effect="blur"
                      delayTime={50}
                      // height={350}
                      src={!srcImg ? imgFeaturedProduct.thumb6 : srcImg} // use normal <img> attributes as props
                      // width={350}
                      threshold={10}
                    />
                    <div className="slide-img">
                      <Slider {...settings}>
                        {dataImg.map((item) => (
                          <div key={item.id} className={styles.itemSlides}>
                            <LazyLoadImage
                              alt={item.src}
                              useIntersectionObserver
                              effect="blur"
                              delayTime={50}
                              // height={350}
                              src={item.src} // use normal <img> attributes as props
                              // width={350}
                              threshold={10}
                              className={styles.slides}
                              onClick={() => handleChangeSrcImg(item.src)}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                  <div className={styles.productRight}>
                    <p>Laptop HP Probook 440 G2 LED Backlit</p>
                    <ul className={styles.desc}>
                      <li>
                        <span>Bộ vi xử lý: </span>
                        <p>Intel Core i505200U 2.2 GHz (3MB L3)</p>
                      </li>
                      <li>
                        <p>Cache upto 2.7 GHz</p>
                      </li>
                      <li>
                        <span>Bộ nhớ RAM:</span>
                        <p>4 GB (DDR3 Bus 1600 MHz)</p>
                      </li>
                      <li>
                        <span>Đồ họa:</span>
                        <p>Intel HD Graphics</p>
                      </li>
                      <li>
                        <span>Ổ đĩa cứng:</span>
                        <p>500 GB (HDD)</p>
                      </li>
                    </ul>
                    <div className={styles.numProduct}>
                      <span className={styles.title}>Sản phẩm: </span>
                      <span className={styles.status}>Còn hàng</span>
                    </div>
                    <div className={styles.price}>
                      <span>14.700.000đ</span>
                    </div>
                    <div className={styles.numOrderWp}>
                      <input type="number" name="num-order" id="num-order" defaultValue={1} />
                    </div>
                    <Button color="success" className={styles.btn}>
                      Thêm giỏ hàng
                    </Button>
                  </div>
                </section>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </PageRoot>
  );
}

DetailProduct.propTypes = {};

export default DetailProduct;
