import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link style={{ color: match ? 'var(--color-primary)' : null }} to={to} {...props}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {};

export default CustomLink;
