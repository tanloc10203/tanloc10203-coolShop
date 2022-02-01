import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setOpen } from 'features/Dashboard/headerSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import NavGroup from '../Nav/NavGroup';
import './Sidebar.scss';

function SideBar(props) {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <div className="sidebar-logo">
          <FontAwesomeIcon icon={faIgloo} />
        </div>
        <div className="sidebar-name">EndCool</div>
        <div className="sidebar-close" onClick={() => dispatch(setOpen(true))}>
          &times;
        </div>
      </header>
      <hr />
      <main className="sidebar-main">
        <NavGroup />
      </main>
    </div>
  );
}

export default SideBar;
