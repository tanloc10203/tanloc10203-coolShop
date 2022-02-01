import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, FormFeedback, FormGroup, Label } from 'reactstrap';

function InputSelect(props) {
  const { icon, label, name, labelFirst, arrOptions, values, errors, touched } = props;
  const showError = errors[name] && touched[name];
  const notError = values[name] && !errors[name] ? true : false;
  const invalid = showError ? 'is-invalid' : "";
  const valid = notError ? 'is-valid' : "";

  return (
    <FormGroup row>
      <Label for={name} >
        <FontAwesomeIcon className="text-muted" icon={icon} />
        <span className="text-muted">{label}</span>
      </Label>
      <Col sm={12}>
        <Field
          as="select"
          id={name}
          name={name}
          className={`form-select ${invalid} ${valid}`}
        >
          <option value="">{labelFirst}</option>
          {arrOptions && arrOptions.length > 0 &&
            arrOptions.map((item, index) => (
              <option key={index} value={item.value}>{item.label}</option>
            ))}
        </Field>
        <ErrorMessage name={name} component={FormFeedback} />
      </Col>
    </FormGroup>
  );
}

InputSelect.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  labelFirst: PropTypes.string,
  arrOptions: PropTypes.array.isRequired
};

InputSelect.defaultProps = {
  icon: {},
  label: "",
  name: "",
  labelFirst: "Vui lòng chọn",
}

export default InputSelect;
