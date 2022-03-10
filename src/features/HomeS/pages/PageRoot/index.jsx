import React from 'react';
import PropTypes from 'prop-types';
import Header from 'features/HomeS/components/containers/Header';
import FooterAndCopyright from 'features/HomeS/components/FooterAndCopyright';

function PageRoot({ children }) {
  return (
    <>
      <Header />
      {children}
      <FooterAndCopyright />
    </>
  );
}

PageRoot.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageRoot;
