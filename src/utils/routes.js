import {
  faHome,
  faTachometerAlt,
  faColumns,
  faIdCardAlt,
  faTasks,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

const routesAdmin = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon_main: faTachometerAlt,
    sub_menu: [{ label: 'Thống kê', path: '/admin/dashboard' }],
  },
  {
    id: 'profile',
    label: 'Thông tin cá nhân',
    path: '/admin/profile',
    icon_main: faIdCardAlt,
    sub_menu: [{ label: 'Thông tin cá nhân', path: '/admin/profile' }],
  },
  {
    id: 'user',
    label: 'Admin',
    path: '/admin/user',
    icon_main: faHome,
    sub_menu: [
      { label: 'Quản lý người dùng', path: '/admin/user' },
      { label: 'Thêm người dùng', path: '/admin/user/new-user' },
    ],
  },
  {
    id: 'role',
    label: 'Quyền',
    path: '/admin/role',
    icon_main: faShieldAlt,
    sub_menu: [
      { label: 'Quản lý quyền', path: '/admin/role' },
      { label: 'Thêm quyền', path: '/admin/role/add-role' },
    ],
  },
  {
    id: 'category',
    label: 'Danh mục',
    path: '/admin/category',
    icon_main: faColumns,
    sub_menu: [
      { label: 'Quản lý danh mục', path: '/admin/category' },
      { label: 'Thêm danh mục', path: '/admin/category/create' },
    ],
  },
  {
    id: 'Product',
    label: 'Sản phẩm',
    path: '/admin/product',
    icon_main: faTasks,
    sub_menu: [
      { label: 'Quản lý sản phẩm', path: '/admin/product' },
      { label: 'Thêm sản phẩm', path: '/admin/product/new-product' },
    ],
  },
];

export { routesAdmin };
