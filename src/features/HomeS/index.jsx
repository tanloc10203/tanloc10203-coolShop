import React from 'react';
import Header from './components/containers/Header';
import FooterAndCopyright from './components/FooterAndCopyright';
import Main from './components/Main';
import Slides from './components/Slides';
import Support from './components/Support';
import './HomeS.scss';
import PageRoot from './pages/PageRoot';

function HomeS(props) {
  React.useLayoutEffect(() => {
    document.title = 'Trang chủ';
  }, []);

  return (
    <>
      <PageRoot>
        <Slides />
        <Support />
        <Main />
      </PageRoot>
    </>
  );
}

HomeS.propTypes = {};

export default HomeS;
