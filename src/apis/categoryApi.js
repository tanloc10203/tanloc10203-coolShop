import axios from './axios';

const categoryApi = {
  create({ token, data }) {
    return axios.post('/admin/category', data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  get({ token, page, limit }) {
    return axios.get(`/admin/category?limit=${limit}&page=${page}`, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
};

export default categoryApi;
