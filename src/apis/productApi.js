import axios from './axios';

const productApi = {
  create({ token, data }) {
    return axios.post('/admin/product', data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  get({ token, limit, page, deleteInput }) {
    if (!deleteInput) {
      return axios.get(`/admin/product?limit=${limit}&page=${page}`, {
        headers: { Authorization: 'Bearer ' + token },
      });
    } else {
      return axios.get(`/admin/product?limit=${limit}&page=${page}&delete=1`, {
        headers: { Authorization: 'Bearer ' + token },
      });
    }
  },
  delete({ token, id, deleteInput }) {
    if (!deleteInput) {
      return axios.delete(`/admin/product/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      });
    } else {
      return axios.delete(`/admin/product/${id}?delete=1`, {
        headers: { Authorization: 'Bearer ' + token },
      });
    }
  },
  update({ token, id, data, recover }) {
    if (!recover) {
      return axios.put(`/admin/product/${id}`, data, {
        headers: { Authorization: 'Bearer ' + token },
      });
    } else
      return axios.put(`/admin/product/${id}?recover=1`, {
        headers: { Authorization: 'Bearer ' + token },
      });
  },
};

export default productApi;
