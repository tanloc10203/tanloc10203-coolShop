import * as Yup from 'yup';
import { phoneRegExp } from './regexp';

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email('Email không hợp lệ').required('Email là trường bắt buộc'),
  password: Yup.string()
    .min(5, 'Ít nhất 5 kí tự')
    .max(32, 'Nhiều nhất 32 kí tự')
    .required('Password là trường bắt buộc'),
});

export const validationSchemaRegister = Yup.object().shape({
  address: Yup.string().required('Đây là trương bắt buộc.'),
  gender: Yup.string().required('Đây là trương bắt buộc'),
  role_id: Yup.string().required('Đây là trương bắt buộc'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ.')
    .required('Đây là trương bắt buộc.'),
  fullname: Yup.string().min(5, 'Ít nhất 5 kí tự.').required('Đây là trương bắt buộc.'),
  email: Yup.string().email('Email không hợp lệ.').required('Đây là trường bắt buộc.'),
  password: Yup.string()
    .required('Đây là trường bắt buộc.')
    .min(5, 'Ít nhất 5 kí tự.')
    .matches(/[a-z0-9A-Z]/, 'Sử dụng các ký tự và kết hợp chữ cái, chữ số.'),
  confirmPassword: Yup.string()
    .required('Đây là trường bắt buộc.')
    .min(5, 'Ít nhất 5 kí tự.')
    .matches(/[a-z0-9A-Z]/, 'Sử dụng các ký tự và kết hợp chữ cái, chữ số.')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

export const validationSchemaUpdate = Yup.object().shape({
  address: Yup.string().required('Đây là trương bắt buộc.'),
  gender: Yup.string().required('Đây là trương bắt buộc'),
  role_id: Yup.string().required('Đây là trương bắt buộc'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ.')
    .required('Đây là trương bắt buộc.'),
  fullname: Yup.string().min(5, 'Ít nhất 5 kí tự.').required('Đây là trương bắt buộc.'),
  email: Yup.string().email('Email không hợp lệ.').required('Đây là trường bắt buộc.'),
});

export const validationSchemaRole = Yup.object().shape({
  name: Yup.string().min(5, 'Ít nhất 5 kí tự').required('Đây là trương bắt buộc'),
  code: Yup.string().required('Đây là trương bắt buộc'),
});

export const validationSchemaCategory = Yup.object().shape({
  name: Yup.string().min(4, 'Ít nhất 4 kí tự').required('Đây là trường bắt buộc'),
});

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const FILE_SIZE = 1024 * 1024;

export const validateSchemaProductCreate = Yup.object().shape({
  name: Yup.string().min(5, 'Có ít nhất 5 kí tự').required('Đây là trường bắt buộc'),
  price: Yup.number().min(1000, 'Giá thấp nhất là 1.000 đ').required('Đây là trường bắt buộc'),
  num: Yup.number().required('Đây là trường bắt buộc'),
  key_product: Yup.string().required('Đây là trường bắt buộc'),
  category_id: Yup.string().required('Đây là trường bắt buộc'),
  disc: Yup.string().min(20).required("Đây la trường bắt buộc"),
  thumbnail: Yup.mixed()
    .nullable()
    .required("Đây là trương bắt buộc")
    .test('FILE_SIZE', 'Uploaded file is too big.', (value) => {
      return !value || (value && value.size <= FILE_SIZE);
    })
    .test(
      'FILE_FORMAT',
      'Uploaded file has unsupported format.',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});


export const validateSchemaProductUpdate = Yup.object().shape({
  name: Yup.string().min(5, 'Có ít nhất 5 kí tự').required('Đây là trường bắt buộc'),
  price: Yup.number().min(1000, 'Giá thấp nhất là 1.000 đ').required('Đây là trường bắt buộc'),
  num: Yup.number().required('Đây là trường bắt buộc'),
  key_product: Yup.string().required('Đây là trường bắt buộc'),
  category_id: Yup.string().required('Đây là trường bắt buộc'),
  disc: Yup.string().min(20).required("Đây la trường bắt buộc"),
  // thumbnail: Yup.mixed()
  //   .nullable()
  //   .required("Đây là trương bắt buộc")
  //   .test('FILE_SIZE', 'Uploaded file is too big.', (value) => {
  //     return !value || (value && value.size <= FILE_SIZE);
  //   })
  //   .test(
  //     'FILE_FORMAT',
  //     'Uploaded file has unsupported format.',
  //     (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
  //   ),
});