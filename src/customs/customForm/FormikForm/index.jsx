import clsx from 'clsx';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, FormGroup, Spinner } from 'reactstrap';
import InputRadio from '../InputRadio';
import InputSelect from '../InputSelect';

function FormikForm(props) {
  const {
    isAddMode,
    action,
    isRadio,
    initialValues,
    arrSelect,
    className,
    onSubmit,
    validationSchema,
    children,
  } = props;

  return (
    <div className={`main-card ${className}`}>
      <h4 className={clsx('mb-4', 'main-card__header')}>{action}</h4>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, errors, values, touched }) => {
          console.log({ errors, values, touched });

          return (
            <Form>
              {children}

              {isRadio && Object.keys(isRadio).length > 0 && (
                <FormGroup row>
                  <Col md={6}>
                    <InputRadio
                      isAddMode={isAddMode}
                      {...isRadio}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  </Col>

                  {arrSelect && Object.keys(arrSelect).length > 0 && (
                    <Col md={6}>
                      <InputSelect
                        {...arrSelect}
                        values={values}
                        errors={errors}
                        touched={touched}
                      />
                    </Col>
                  )}
                </FormGroup>
              )}
              <button
                type="submit"
                className={`btn btn-${!isAddMode ? 'success' : 'primary'} mb-5`}
              >
                {isSubmitting ? (
                  <>
                    <Spinner className="m-1" type="grow" size="sm" />
                    <Spinner className="m-1" type="grow" size="sm" />
                    <Spinner className="m-1" type="grow" size="sm" />
                  </>
                ) : (
                  action
                )}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

FormikForm.propTypes = {
  isAddMode: PropTypes.bool,
  className: PropTypes.string,
  action: PropTypes.string,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

FormikForm.defaultProps = {
  isMode: false,
  className: '',
  action: '',
};

export default FormikForm;
