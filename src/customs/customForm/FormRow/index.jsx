import { FastField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, FormGroup } from 'reactstrap';

function FormRow({ arrFileds, isAddMode }) {
  return (
    <FormGroup row>
      {arrFileds &&
        arrFileds.length > 0 &&
        arrFileds.map((item, index) => (
          <Col md={6} key={index}>
            <FastField
              keys={item.keys}
              type={item.type}
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              component={item.component}
              icon={item.icon}
              disabled={!isAddMode && item.name === 'email'}
            />
          </Col>
        ))}
    </FormGroup>
  );
}

FormRow.propTypes = {
  arrFileds: PropTypes.array.isRequired,
  isAddMode: PropTypes.bool,
};

export default FormRow;
