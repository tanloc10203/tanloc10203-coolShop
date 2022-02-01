import axios from "./axios";

const authApi = {
  login: (data) => {
    return axios.post('/auth/login', data);
  },
  getUserLogin: (token) => {
    return axios
      .get('/auth/login', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => response)
      .catch(err => {
        if (err.response) {
          return err.response.data;
        }
      });
  }
}

export default authApi;