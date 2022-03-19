import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

function BreadCrumbChange({ name }) {
  return (
    <Breadcrumb className="mb-3">
      <BreadcrumbItem>
        <Link to="/">
          <FontAwesomeIcon icon={faHouseDamage} /> Trang chủ
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>{name}</BreadcrumbItem>
    </Breadcrumb>
  );
}

BreadCrumbChange.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BreadCrumbChange;
