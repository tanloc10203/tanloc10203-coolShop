import React from 'react';
import PropTypes from 'prop-types';
import PageRoot from '../PageRoot';
import { Helmet } from 'react-helmet';

function Blog(props) {
  return (
    <PageRoot>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <h1 className="text-center text-primary">Blog</h1>
    </PageRoot>
  );
}

Blog.propTypes = {};

export default Blog;
