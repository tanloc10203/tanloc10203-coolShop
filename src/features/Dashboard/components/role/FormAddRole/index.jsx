import { faShieldAlt, faUserTag } from "@fortawesome/free-solid-svg-icons";
import FormikForm from "customs/customForm/FormikForm";
import InputField from "customs/customForm/InputField";
import { FastField } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { validationSchemaRole } from "utils";

function FormAddRole(props) {
  const { isAddMode, initialValues, onSubmit } = props;

  return (
    <FormikForm
      initialValues={initialValues}
      validationSchema={validationSchemaRole}
      onSubmit={onSubmit}
      isAddMode={isAddMode}
      action={!isAddMode ? "Cập nhật quyền" : "Thêm quyền"}
    >
      <FastField
        label="Tên quyền"
        type="text"
        name="name"
        placeholder="Nhập tên quyền..."
        component={InputField}
        icon={faUserTag}
      />

      <FastField
        label="Mã quyền"
        type="text"
        name="code"
        placeholder="Đặt mã cho quyền..."
        component={InputField}
        icon={faShieldAlt}
      />
    </FormikForm>
  );
}

FormAddRole.propTypes = {
  isAddMode: PropTypes.bool,
  initialValues: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormAddRole;
