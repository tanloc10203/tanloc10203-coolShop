import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, FastField, Form, Formik } from 'formik';
import { faAudioDescription, faFileUpload, faInfo } from '@fortawesome/free-solid-svg-icons';
import InputField from 'customs/customForm/InputField';
import { FormFeedback, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from '../../Markdown';
import PreviewImage from '../../PreviewImage';
import { validateSchemaProductNext } from 'utils';

function NextForm({ onSubmit, value, onChangeValue, isAddMode }) {
  const initialValues = {
    disc: '',
    thumbnail: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchemaProductNext}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, values, touched, setFieldValue }) => {
        console.log({ errors, values, touched });

        const showError = errors['thumbnail'] && touched['thumbnail'] ? true : false;
        const notError = values['thumbnail'] && !errors['thumbnail'] ? true : false;

        console.log({ showError, notError });

        return (
          <Form>
            <FastField
              icon={faAudioDescription}
              type="textarea"
              cols={30}
              rows={20}
              label="Giới thiệu sản phẩm"
              name="disc"
              component={InputField}
            />

            <Label>
              <FontAwesomeIcon className="text-muted" icon={faInfo} />{' '}
              <span className="text-muted">{'Chi tiết sản phẩm'}</span>
            </Label>
            <Markdown value={value} onChangeValueInput={onChangeValue} />

            <FormGroup>
              <Label htmlFor={'thumbnail'}>
                <FontAwesomeIcon className="text-muted mt-3" icon={faFileUpload} />{' '}
                <span className="text-muted">{'Thêm ảnh tiêu đề'}</span>
              </Label>

              <Input
                invalid={showError}
                type="file"
                name="thumbnail"
                valid={notError}
                onChange={(event) => setFieldValue('thumbnail', event.target.files[0])}
                id="thumbnail"
              />

              <ErrorMessage name="thumbnail" component={FormFeedback} />
            </FormGroup>

            {values && values.thumbnail && <PreviewImage files={values.thumbnail} />}

            <button type="submit" className={`btn btn-${!isAddMode ? 'success' : 'primary'} mb-5`}>
              {isSubmitting ? (
                <>
                  <Spinner className="m-1" type="grow" size="sm" />
                  <Spinner className="m-1" type="grow" size="sm" />
                  <Spinner className="m-1" type="grow" size="sm" />
                </>
              ) : (
                'Thêm mới'
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

NextForm.propTypes = {
  isAddMode: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};

NextForm.defaultProps = {
  isAddMode: true,
};

export default NextForm;
