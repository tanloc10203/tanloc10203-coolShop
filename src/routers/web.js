import login from './admin/auth';
import users from './admin/users';
import product from './admin/product';
import category from './admin/category';
import role from './admin/role';

let initWebRoutes = app => {
  app.use('/api/auth', login);
  app.use('/api/admin/users', users);
  app.use('/api/admin/product', product);
  app.use('/api/admin/role', role);
  app.use('/api/admin/category', category);
  return app;
}

module.exports = initWebRoutes;