import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

function InputField(props) {
  const { icon, form, field, type, label, placeholder, disabled } = props;
  const { errors, touched, values } = form;
  const { name } = field;
  const showError = errors[name] && touched[name];
  const notError = values[name] && !errors[name] ? true : false;
  const [openPass, setOpenPass] = React.useState(false);

  return (
    <FormGroup>
      <Label>
        <FontAwesomeIcon className="text-muted" icon={icon} />{' '}
        <span className="text-muted">{label}</span>
        {type === 'password' ? ' | ' : null}
        {type === 'password' ? (
          <span
            className="fw-bold"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenPass(!openPass)}
          >
            {openPass ? 'Ẩn' : 'Hiện'}
          </span>
        ) : null}
      </Label>

      <Input
        name={name}
        {...field}
        invalid={showError}
        disabled={disabled}
        placeholder={placeholder}
        type={type === 'password' ? (openPass ? 'text' : 'password') : null}
        valid={notError}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

InputField.propTypes = {
  icon: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

InputField.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  label: '',
};

export default InputField;
