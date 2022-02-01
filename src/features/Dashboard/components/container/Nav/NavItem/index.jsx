import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ListGroup, ListGroupItem, UncontrolledCollapse } from 'reactstrap';
import SubItem from '../SubItem';

function NavItem(props) {
  const { navArr, onOpen } = props;
  const [status, setStatus] = useState(false);

  return (
    <>
      <ListGroupItem action>
        <div className="sidebar-main__nav-item" id={navArr?.id} onClick={() => setStatus(!status)}>
          <Link to={navArr?.path} className="sidebar-main__item">
            <FontAwesomeIcon icon={navArr?.icon_main} />

            <div className="sidebar-main__item-link" onClick={() => setStatus(!status)}>
              {navArr?.label}
            </div>
          </Link>

          {navArr?.sub_menu ? (
            <FontAwesomeIcon
              icon={faChevronDown}
              onClick={() => setStatus(!status)}
              style={{
                transform: status ? 'rotate(180deg)' : null,
              }}
            />
          ) : null}
        </div>
      </ListGroupItem>

      <div>
        <ListGroup className="sidebar-main__submenu">
          <UncontrolledCollapse defaultOpen={onOpen} toggler={`#${navArr?.id}`}>
            {navArr?.sub_menu
              ? navArr.sub_menu.map((item, index) => <SubItem subMenu={item} key={index} />)
              : null}
          </UncontrolledCollapse>
        </ListGroup>
      </div>

      <Outlet />
    </>
  );
}

NavItem.propTypes = {
  navArr: PropTypes.object.isRequired,
  onOpen: PropTypes.bool.isRequired,
};

NavItem.defaultProps = {
  onOpen: false,
};

export default NavItem;
