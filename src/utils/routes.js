import { faHome, faTachometerAlt, faColumns, faIdCardAlt, faTasks, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const routesAdmin = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon_main: faTachometerAlt,
    sub_menu: [
      { label: "Thống kê", path: "/admin/dashboard", }
    ]
  },
  {
    id: "user",
    label: "User",
    path: "/admin/user",
    icon_main: faHome,
    sub_menu: [
      { label: "Quản lý người dùng", path: "/admin/user", },
      { label: "Thêm người dùng", path: "/admin/user/new-user", },
    ]
  },
  {
    id: "role",
    label: "Role",
    path: "/admin/role",
    icon_main: faShieldAlt,
    sub_menu: [
      { label: "Quản lý quyền", path: "/admin/role", },
      { label: "Thêm quyền", path: "/admin/role/add-role" }
    ]
  },
  {
    id: "table",
    label: "Table",
    path: "/admin/table",
    icon_main: faColumns,
    sub_menu: [
      { label: "Thông tin tổng hợp", path: "/admin/table", },
    ]
  },
  {
    id: "profile",
    label: "Profile",
    path: "/admin/profile",
    icon_main: faIdCardAlt,
    sub_menu: [
      { label: "Thông tin cá nhân", path: "/admin/profile" }
    ]
  },
  {
    id: "Product",
    label: "Product",
    path: "/admin/product",
    icon_main: faTasks,
    sub_menu: [
      { label: "Quản lý sản phẩm", path: "/admin/product", },
    ]
  }
]

export { routesAdmin };
