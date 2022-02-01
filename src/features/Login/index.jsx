import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from 'components/ProtectRouter';
import InputField from 'customs/customForm/InputField';
import { FastField, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'reactstrap';
import { validationSchemaLogin } from 'utils';
import './Login.scss';
import { authLogin } from './loginSlice';

const initialValues = {
  email: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const isToken = useAuth();

  useEffect(() => {
    isToken && navigate('/admin/dashboard', { replace: true });
  }, [navigate, isToken]);

  const handleSubmit = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(authLogin(data));
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="loginMain">
      <Container>
        <Row className="justify-content-center">
          <Col xl={4} sm={8} md={6} className="loginMain-wrapper">
            <div className={`shadow border-0 card`}>
              <div className="bg-white border-0 py-5 card-header">
                <h3 className="m-0 text-center">Đăng nhập</h3>
                {errors ? (
                  <p className="text-danger text-center">
                    <cite>{errors?.err}</cite>
                  </p>
                ) : null}
              </div>

              <div className="px-lg-5 py-lg-5 card-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchemaLogin}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => {
                    if (isSubmitting) {
                      return (
                        <div className="text-center">
                          <Spinner className="m-1" color="dark" type="grow" size="sm" />
                          <Spinner className="m-1" color="dark" type="grow" size="sm" />
                          <Spinner className="m-1" color="dark" type="grow" size="sm" />
                        </div>
                      );
                    }
                    return (
                      <Form>
                        <FastField
                          type="email"
                          name="email"
                          placeholder="Email"
                          icon={faEnvelope}
                          component={InputField}
                          label="Email"
                        />

                        <FastField
                          label="Password"
                          component={InputField}
                          name="password"
                          type="password"
                          placeholder="Password"
                          icon={faKey}
                        />

                        <p className="text-muted forget-pass">Quên mật khẩu?</p>

                        <button type="submit" className="btn btn-primary loginMain__btn-custom">
                          Đăng nhập
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Login.propTypes = {};

export default Login;
