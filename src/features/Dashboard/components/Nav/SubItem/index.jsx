import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'reactstrap'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function SubItem({ subMenu }) {
  const resolved = useResolvedPath(subMenu.path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={subMenu.path}>
      <ListGroupItem
        className={match ? 'active' : null}
        action
      >
        {subMenu.label}
      </ListGroupItem>
    </Link>
  )
}

SubItem.propTypes = {
  subMenu: PropTypes.object.isRequired,
}

SubItem.defaultProps = {

}

export default SubItem

