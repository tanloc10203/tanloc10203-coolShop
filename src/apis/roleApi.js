import axios from './axios';

const roleApi = {
  getRole(token) {
    return axios.get('/admin/role', {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  createRole({ token, data }) {
    return axios.post('/admin/role', data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  deleteRole({ id, token }) {
    return axios.delete(`/admin/role/${id}`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  updateRole({ id, token, data }) {
    return axios.put(`/admin/role/${id}`, data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
};

export default roleApi;
