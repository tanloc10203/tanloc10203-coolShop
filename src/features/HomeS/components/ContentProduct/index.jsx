import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input, InputGroup, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imgFeaturedProduct } from 'utils';
import './ContentProduct.scss';

function ContentProduct(props) {
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
    <div className="content-product">
      <section>
        <div className="content-product--header d-flex justify-content-between">
          <div className="header-title text-uppercase fw-bold">laptop</div>
          <div className="header-right">
            <InputGroup>
              <Input id="exampleSelect" name="select" type="select">
                <option>Sắp xếp</option>
                <option>Từ A-Z</option>
                <option>Từ Z-A</option>
                <option>Giá cao xuống thấp</option>
                <option>Giá thấp lên cao</option>
              </Input>
              <Button>Lọc</Button>
            </InputGroup>
          </div>
        </div>

        <div className="content-product--main">
          {data &&
            data.map((item, index) => (
              <div key={index} style={{ width: '100%', display: 'inline-block' }}>
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
        </div>
      </section>

      <Pagination className="ms-2 mt-3">
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" last />
        </PaginationItem>
      </Pagination>
    </div>
  );
}

ContentProduct.propTypes = {};

export default ContentProduct;
