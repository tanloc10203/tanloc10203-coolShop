import { faBars, faHome, faIndent, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { setOpen } from 'features/Dashboard/headerSlice'
import { useWindowScroll } from 'hooks'
import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import styles from "./Header.module.scss"

function Header({ name, fullname }) {
  const { open } = useSelector(state => state.header);
  const dispatch = useDispatch();
  const offset = useWindowScroll();

  return (
    <header className={clsx(styles.header, {
      [styles.active]: offset > 5
    })}>
      <div>
        <Breadcrumb listTag="div">
          <BreadcrumbItem >
            <Link className={styles.headerBackToHome} to="/admin/dashboard">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            {name}
          </BreadcrumbItem>
        </Breadcrumb>
        <p className="m-0 fw-bold">{name}</p>
      </div>
      <div className={styles.headerAction}>
        <span className="me-2">Xin chào, {fullname}</span>
        <div className="d-flex">
          <Link className={styles.link} to="/admin/logout">
            <span>
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
            Đăng xuất
          </Link>
          <div className={styles.custom} onClick={() => dispatch(setOpen(!open))}>
            <FontAwesomeIcon icon={open ? faIndent : faBars} />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  fullname: PropTypes.string
}

Header.defaultProps = {
  name: 'DashBoard',
  fullname: ""
}

export default Header

