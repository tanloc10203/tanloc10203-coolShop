import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BreadCrumbChange from 'features/HomeS/components/BreadCrumbChange';
import SideBar from 'features/HomeS/components/SideBar';
import { useWindowSize } from 'hooks';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import imgPost from '../../../../assets/img/img-post-01.jpg';
import PageRoot from '../PageRoot';
import styles from './Blog.module.scss';

function Blog(props) {
  const [width] = useWindowSize();

  return (
    <PageRoot>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Container fluid>
        <Row>
          <Col>
            <main className="product mt-3">
              <BreadCrumbChange name="Blog" />
              <Row>
                {width >= 1029.89 && (
                  <Col md={3}>
                    <div className="main-sidebar">
                      <SideBar />
                    </div>
                  </Col>
                )}
                <Col md={12} lg={width <= 1029 ? 12 : 9}>
                  <ul className={styles.listItem}>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <li key={item}>
                        <Link to="/introduce">
                          <img src={imgPost} alt="" />
                        </Link>
                        <div>
                          <Link to="/introduce">
                            Mời gọi kiều bào hiến kế, chung sức xây dựng phát triển TP. Hồ Chí Minh
                          </Link>
                          <span>
                            <FontAwesomeIcon icon={faClock} /> 28/11/2017
                          </span>
                          <p>
                            Trong ngày hôm nay (11/11) đoàn kiều bào đã tổ chức thành 4 nhóm đi tham
                            quan các điểm như huyện Cần Giờ, Đại học Quốc gia, Khu công nghệ cao
                            TP.HCM, Công viên phần mềm Quang Trung, Khu Nông nghiệp Công nghệ cao,
                            Khu Đô thị mới Thủ Thiêm, Cảng Cát Lái... để kiều bào hiểu thêm về tình
                            hình phát
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </main>
          </Col>
        </Row>
      </Container>
      <Outlet />
    </PageRoot>
  );
}

Blog.propTypes = {};

export default Blog;
