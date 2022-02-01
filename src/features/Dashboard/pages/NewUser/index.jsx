import { faShieldAlt, faVenusMars } from "@fortawesome/free-solid-svg-icons";
import FormikForm from "customs/customForm/FormikForm";
import FormRow from "customs/customForm/FormRow";
import { getRoles } from "features/Dashboard/roleSlice";
import { registerUser, updateUser } from "features/Dashboard/userSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import {
  arrAddressAndPhoneNumber,
  arrFullnameAndEmail,
  arrPassAndConfirm,
  radioArr,
  toast,
  validationSchemaRegister,
  validationSchemaUpdate
} from "utils";
import Home from "../Home";

function NewUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.role);
  const { isSuccess } = useSelector((state) => state.user);
  const [arrSelect, setArrSelect] = useState([]);
  const { state } = useLocation();
  const isAddMode = !state;

  useEffect(() => {
    const token = localStorage.getItem("token");
    token !== null && token && dispatch(getRoles(token));
  }, [dispatch]);

  const getUserUpdate = (user = {}) => {
    if (user) {
      return {
        email: user.email,
        address: user.address,
        fullname: user.fullname,
        phoneNumber: user.phone_number,
        gender: user.gender,
        role_id: user.role_id.code,
      };
    }
  };

  const initialValues = isAddMode
    ? {
        email: "",
        password: "",
        address: "",
        fullname: "",
        phoneNumber: "",
        confirmPassword: "",
        gender: "",
        role_id: "",
      }
    : getUserUpdate(state && state?.user);

  useEffect(() => {
    isSuccess && navigate("/admin/user", { replace: true });
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (data && data.length) {
      const dataFillAdmin = data.filter((role) => role.code !== "R1");
      let selectArr = [];
      selectArr = dataFillAdmin.map((item) => ({
        value: item.code,
        label: item.name,
      }));
      setArrSelect(selectArr);
    }
  }, [data]);

  const handleOnSubmit = (values, { resetForm, setSubmitting }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { confirmPassword, phoneNumber, ...data } = values;
        const newData = {
          phone_number: phoneNumber,
          ...data,
        };
        if (isAddMode) {
          dispatch(registerUser(newData))
            .unwrap()
            .then((response) => {
              const { error } = response;
              if (error === 0) {
                resetForm();
              }
            });
          setSubmitting(false);
        } else {
          const token = localStorage.getItem("token");
          if (token) {
            dispatch(
              updateUser({ id: state && state.user._id, token, data: newData })
            );
          } else toast.error("Phiên đăng nhập đã hết hạn");
        }
        resolve(true);
      }, 500);
    });
  };

  return (
    <Home name="Thêm thành viên">
      <main className="main-user__add">
        <Container fluid className="px-3">
          <Row>
            <Col>
              <FormikForm
                initialValues={initialValues}
                validationSchema={
                  isAddMode ? validationSchemaRegister : validationSchemaUpdate
                }
                onSubmit={handleOnSubmit}
                isAddMode={isAddMode}
                className="mt-5"
                action={isAddMode ? "Thêm mới" : "Chỉnh sửa"}
                isRadio={{
                  type: "radio",
                  icon: faVenusMars,
                  label: "Giới tinh",
                  name: "gender",
                  radioArr: radioArr,
                }}
                arrSelect={{
                  name: "role_id",
                  arrOptions: arrSelect,
                  label: "Quyền",
                  icon: faShieldAlt,
                  labelFirst: "Chọn quyền",
                }}
              >
                <FormRow
                  arrFileds={arrFullnameAndEmail}
                  isAddMode={isAddMode}
                />
                <FormRow arrFileds={arrAddressAndPhoneNumber} />
                {!isAddMode ? null : <FormRow arrFileds={arrPassAndConfirm} />}
              </FormikForm>
            </Col>
          </Row>
        </Container>
      </main>
    </Home>
  );
}

NewUser.propTypes = {};

export default NewUser;
