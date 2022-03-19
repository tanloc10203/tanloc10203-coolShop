import React from 'react';
import Category from '../Category';
import styles from './SideBar.module.scss';

function SideBar(props) {
  return (
    // <div className={styles.main}>
    <Category />
    // </div>
  );
}

SideBar.propTypes = {};

export default SideBar;
