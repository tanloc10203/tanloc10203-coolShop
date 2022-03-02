import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/containers/Header';
import Slides from './components/Slides';
import Main from './components/Main';
import './HomeS.scss';
import Support from './components/Support';

function HomeS(props) {
  return (
    <>
      <Header />
      <Slides />
      <Support />
      <Main />
    </>
  );
}

HomeS.propTypes = {};

export default HomeS;
