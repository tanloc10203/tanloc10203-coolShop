import axios from './axios';

const userApi = {
  registerUser(data) {
    return axios.post('/auth/register', data);
  },
  getUser({ page, limit, token }) {
    return axios.get(`/admin/users?page=${page}&limit=${limit}`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  deleteUser({ id, token }) {
    return axios.delete(`/admin/users/${id}`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  updateUser({ id, token, data }) {
    return axios.put(`/admin/users/${id}`, data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
};

export default userApi;
