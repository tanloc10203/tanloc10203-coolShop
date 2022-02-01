import React from 'react';
import { useLocation } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import { routesAdmin } from 'utils';
import NavItem from '../NavItem';

function NavGroup(props) {
  const location = useLocation();

  return (
    <ListGroup className="sidebar-main__list-item">
      {routesAdmin &&
        routesAdmin.length &&
        routesAdmin.map((item, index) => {
          let onOpen = false;
          item.sub_menu.forEach((item) => {
            if (item.path === location.pathname) onOpen = true;
          });

          return <NavItem key={index} navArr={item} onOpen={onOpen} />;
        })}
    </ListGroup>
  );
}

NavGroup.propTypes = {};

export default NavGroup;
