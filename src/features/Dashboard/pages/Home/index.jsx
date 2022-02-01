import clsx from 'clsx';
import { useAuth } from 'components/ProtectRouter';
import Header from 'features/Dashboard/components/Header';
import { setOpen } from 'features/Dashboard/headerSlice';
import { authGetUserLogin } from 'features/Login/loginSlice';
import { useWindowSize } from 'hooks';
import { PropTypes } from 'prop-types';
import { memo, useCallback, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'reactstrap';
import SideBar from '../../components/SideBar';
import styles from "./homePage.module.scss";

function Home({ children, name }) {
  const { open } = useSelector(state => state.header);
  const { user, loading } = useSelector(state => state.login);
  const [width] = useWindowSize();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isToken = useAuth();

  const getUserLogin = useCallback(() => {
    if (isToken) dispatch(authGetUserLogin(isToken));
    else navigate("/admin/login", { replace: true });
  }, [navigate, dispatch, isToken]);

  useEffect(() => {
    let unmounted = false;
    !unmounted && getUserLogin();
    return () => unmounted = true;
  }, [getUserLogin]);

  useLayoutEffect(() => {
    let unmounted = false;
    if (width >= 1030)
      !unmounted && dispatch(setOpen(false));
    else
      !unmounted && dispatch(setOpen(true));
    return () => unmounted = true;
  }, [width, dispatch]);

  return (
    <>
      {loading ? <Spinner>Loading...</Spinner> :
        <main className={clsx(styles.homePage, {
          [styles.active]: open
        })}>
          <Container fluid>
            <Row>
              <Col className={styles.colCustom_3} xl={3} md={3} sm={3}>
                <SideBar />
              </Col>
              <Col className={clsx(styles.colCustom_9, 'ps-0', 'mt-3')} xl={9} md={9}>
                <Header name={name} fullname={user && user.fullname} />
                {children}
              </Col>
            </Row>
          </Container>
        </main>
      }
    </>
  )
}

Home.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

Home.defaultProps = {
  name: 'DashBoard'
}

export default memo(Home);

