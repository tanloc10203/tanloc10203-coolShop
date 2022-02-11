import axios from './axios';

const productApi = {
  create({ token, data }) {
    return axios.post('/admin/product', data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  get({ token, limit, page }) {
    return axios.get(`/admin/product?limit=${limit}&page=${page}`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  delete({ token, id }) {
    return axios.delete(`/admin/product/${id}`, {
      headers: { Authorization: 'Bearer' + token },
    });
  },
  update({ token, id, data }) {
    return axios.put(`/admin/product/${id}`, data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
};

export default productApi;
