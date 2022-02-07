import {
  faDollarSign,
  faEnvelope,
  faGrinSquintTears,
  faKey,
  faMapMarkerAlt,
  faPhone,
  faSignature,
  faStarAndCrescent,
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

export const arrNameAndPriceProduct = [
  {
    type: 'text',
    name: 'name',
    label: 'Tên sản phẩm',
    placeholder: 'Nhập tên sản phẩm...',
    component: InputField,
    icon: faSignature,
  },
  {
    type: 'number',
    name: 'price',
    label: 'Giá sản phẩm',
    placeholder: 'Nhập giá sản phẩm...',
    component: InputField,
    icon: faDollarSign,
  },
];

export const arrNumAndKeyProduct = [
  {
    type: 'number',
    name: 'num',
    label: 'Số lượng sản phẩm',
    placeholder: 'Nhập số lượng sản phẩm...',
    component: InputField,
    icon: faGrinSquintTears,
  },
  {
    type: 'text',
    name: 'keyProduct',
    label: 'Mã sản phẩm',
    placeholder: 'Nhập mã sản phẩm...',
    component: InputField,
    icon: faStarAndCrescent,
  },
];
