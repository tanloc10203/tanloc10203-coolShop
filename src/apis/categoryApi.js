import axios from './axios';

const categoryApi = {
  create({ token, data }) {
    return axios.post('/admin/category', data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  get({ token, page, limit, key }) {
    if (key !== 'ALL')
      return axios.get(`/admin/category?limit=${limit}&page=${page}`, {
        headers: { Authorization: 'Bearer ' + token },
      });
    else
      return axios.get(`/admin/category`, {
        headers: { Authorization: 'Bearer ' + token },
      });
  },
  delete({ token, id }) {
    return axios.delete(`/admin/category/${id}`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  update({ token, id, data }) {
    return axios.put(`/admin/category/${id}`, data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
};

export default categoryApi;
