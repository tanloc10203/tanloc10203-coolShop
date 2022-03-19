import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { imgFeaturedProduct } from 'utils';
import './FeaturedProducts.scss';
import { Button } from 'reactstrap';
import { Link, Outlet } from 'react-router-dom';
import ImgRender from '../containers/ImgRender';
import {
  LazyLoadImage,
  trackWindowScroll,
  LazyLoadComponent,
} from 'react-lazy-load-image-component';

function FeaturedProducts(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: 'Tên sả phẩm',
      priceOld: '7.400.000',
      priceNew: '6.390.000đ',
      img: imgFeaturedProduct.thumb1,
    },
    {
      name: 'Tên sả phẩm',
      priceOld: '7.400.000',
      priceNew: '6.390.000đ',
      img: imgFeaturedProduct.thumb2,
    },
    {
      name: 'Tên sả phẩm',
      priceOld: '7.400.000',
      priceNew: '6.390.000đ',
      img: imgFeaturedProduct.thumb3,
    },
    {
      name: 'Tên sả phẩm',
      priceOld: '7.400.000',
      priceNew: '6.390.000đ',
      img: imgFeaturedProduct.thumb4,
    },
    {
      name: 'Tên sả phẩm',
      priceOld: '7.400.000',
      priceNew: '6.390.000đ',
      img: imgFeaturedProduct.thumb5,
    },
    {
      name: 'Tên sả phẩm',
      priceOld: '7.400.000',
      priceNew: '6.390.000đ',
      img: imgFeaturedProduct.thumb6,
    },
  ];

  return (
    <div className="product">
      <h1>Sản phẩm nổi bật</h1>
      <div>
        <Slider {...settings}>
          {data &&
            data.map((item, index) => (
              <div key={index}>
                <Link className="box" to="/detail-product">
                  <LazyLoadImage
                    alt={item.img}
                    useIntersectionObserver
                    effect="blur"
                    delayTime={50}
                    height={136}
                    src={item.img} // use normal <img> attributes as props
                    width={200}
                    threshold={10}
                  />
                  <div className="box-content">
                    <p>{item?.name}</p>
                    <span>
                      {item?.priceNew} <del>{item?.priceOld}</del>
                    </span>
                    <div>
                      <Button size="sm" outline color="primary" className="mb-1">
                        Thêm giỏ hàng
                      </Button>
                      <Button size="sm" outline color="danger">
                        Mua ngay
                      </Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Slider>
      </div>
      <Outlet />
    </div>
  );
}

FeaturedProducts.propTypes = {};

export default trackWindowScroll(FeaturedProducts);
