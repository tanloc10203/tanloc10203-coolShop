import axios from 'axios';
import Qs from 'qs';

const BASE_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: (params) => Qs.stringify(params),
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => Promise.reject(err)
);

export default instance;
