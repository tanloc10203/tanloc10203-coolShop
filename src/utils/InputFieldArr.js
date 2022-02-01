import {
  faEnvelope,
  faKey,
  faMapMarkerAlt,
  faPhone,
  faUserTag,
} from '@fortawesome/free-solid-svg-icons';
import InputField from 'customs/customForm/InputField';

export const radioArr = [
  {
    value: 'male',
    label: 'Nam',
  },
  {
    value: 'female',
    label: 'Nữ',
  },
];

export const arrFullnameAndEmail = [
  {
    type: 'text',
    name: 'fullname',
    label: 'Họ và tên',
    placeholder: 'Nhập họ và tên',
    component: InputField,
    icon: faUserTag,
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Nhập email',
    component: InputField,
    icon: faEnvelope,
  },
];

export const arrAddressAndPhoneNumber = [
  {
    type: 'text',
    name: 'address',
    label: 'Địa chỉ',
    placeholder: 'Nhập Địa chỉ',
    component: InputField,
    icon: faMapMarkerAlt,
  },
  {
    type: 'text',
    name: 'phoneNumber',
    label: 'Số điện thoại',
    placeholder: 'Nhập Số điện thoại',
    component: InputField,
    icon: faPhone,
  },
];

export const arrPassAndConfirm = [
  {
    type: 'password',
    name: 'password',
    label: 'Mật khẩu',
    placeholder: 'Nhập Mật khẩu',
    component: InputField,
    icon: faKey,
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Xác nhận mật khẩu',
    placeholder: 'Nhập lại mật khẩu',
    component: InputField,
    icon: faKey,
  },
];
