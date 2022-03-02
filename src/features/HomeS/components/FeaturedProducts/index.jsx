import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { imgFeaturedProduct } from 'utils';
import './FeaturedProducts.scss';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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

  return (
    <div className="product">
      <h1>Sản phẩm nổi bật</h1>
      <div>
        <Slider {...settings}>
          <div>
            <Link className="box" to="/">
              <img src={imgFeaturedProduct.thumb1} alt="" />
              <div className="box-content">
                <p>Tên sản phẩm</p>
                <span>
                  6.390.000đ <del>7.400.000</del>
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
          <div>
            <Link className="box" to="/">
              <img src={imgFeaturedProduct.thumb2} alt="" />
              <div className="box-content">
                <p>Tên sản phẩm</p>
                <span>
                  6.390.000đ <del>7.400.000</del>
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
          <div>
            <Link className="box" to="/">
              <img src={imgFeaturedProduct.thumb3} alt="" />
              <div className="box-content">
                <p>Tên sản phẩm</p>
                <span>
                  6.390.000đ <del>7.400.000</del>
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
          <div>
            <Link className="box" to="/">
              <img src={imgFeaturedProduct.thumb4} alt="" />
              <div className="box-content">
                <p>Tên sản phẩm</p>
                <span>
                  6.390.000đ <del>7.400.000</del>
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
          <div>
            <Link className="box" to="/">
              <img src={imgFeaturedProduct.thumb5} alt="" />
              <div className="box-content">
                <p>Tên sản phẩm</p>
                <span>
                  6.390.000đ <del>7.400.000</del>
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
          <div>
            <Link className="box" to="/">
              <img src={imgFeaturedProduct.thumb6} alt="" />
              <div className="box-content">
                <p>Tên sản phẩm</p>
                <span>
                  6.390.000đ <del>7.400.000</del>
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
        </Slider>
      </div>
    </div>
  );
}

FeaturedProducts.propTypes = {};

export default FeaturedProducts;
