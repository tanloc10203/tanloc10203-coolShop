import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import FormatNumberInput from 'features/Dashboard/components/container/FormatNumberInput';
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

function InputField(props) {
  const { icon, form, field, type, label, placeholder, disabled, hidden, keys } = props;
  const { errors, touched, values, setFieldValue } = form;
  const { name } = field;
  const showError = errors[name] && touched[name];
  const notError = values[name] && !errors[name] ? true : false;
  const [openPass, setOpenPass] = React.useState(false);

  return (
    <FormGroup>
      <Label htmlFor={name}>
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

      {keys === 'number' ? (
        <FormatNumberInput
          placeholder={placeholder}
          className={clsx('form-control', {
            'is-invalid': showError,
            'is-valid': notError,
          })}
          id={name}
          value={values[name]}
          onValueChange={(val) => setFieldValue(name, val.floatValue)}
        />
      ) : (
        <Input
          name={name}
          {...field}
          invalid={showError}
          disabled={disabled}
          hidden={hidden}
          placeholder={placeholder}
          type={type === 'password' ? (openPass ? 'text' : 'password') : type}
          valid={notError}
          id={name}
        />
      )}

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
  hidden: PropTypes.bool,
  label: PropTypes.string,
};

InputField.defaultProps = {
  name: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  label: '',
  hidden: false,
};

export default InputField;
