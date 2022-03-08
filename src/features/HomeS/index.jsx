import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/containers/Header';
import Slides from './components/Slides';
import Main from './components/Main';
import './HomeS.scss';
import Support from './components/Support';
import FooterAndCopyright from './components/FooterAndCopyright';

function HomeS(props) {
  React.useLayoutEffect(() => {
    document.title = 'Trang chủ';
  }, []);

  return (
    <>
      <Header />
      <Slides />
      <Support />
      <Main />
      <FooterAndCopyright />
    </>
  );
}

HomeS.propTypes = {};

export default HomeS;
