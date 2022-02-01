import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field } from 'formik';

function InputRadio(props) {
  const { icon, label, name, radioArr, errors, touched, values, isAddMode } = props;
  const showError = errors[name] && touched[name];
  const notError = values[name] && !errors[name] ? true : false;
  const invalid = showError ? 'is-invalid' : "";
  const valid = notError ? 'is-valid' : "";

  return (
    <>
      <Label>
        <FontAwesomeIcon className="text-muted" icon={icon} />
        <span className="text-muted">{label}</span>
      </Label>

      <FormGroup>
        {radioArr && radioArr.length
          && radioArr.map((item, index) => (
            <FormGroup inline check key={index}>
              <Field
                type="radio"
                name={name}
                value={item.value}
                id={item.value}
                disabled={!isAddMode}
                className={`form-check-input ${invalid} ${valid}`}
              />
              <Label htmlFor={item.value} check>{item.label}</Label>
            </FormGroup>
          ))}
        <ErrorMessage name={name} component={FormFeedback} />
      </FormGroup>
    </>
  );
}

InputRadio.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  radioArr: PropTypes.array.isRequired,
};

InputRadio.defaultProps = {
  icon: {},
  label: "",
}

export default InputRadio;
