const axios = require('axios');

const api = axios.create({
  baseURL: 'http://192.168.1.6:3000',
});

api.interceptors.request.use(
  async (config) => {
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  (error) => Promise.reject(error.response?.data),
);

api.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error.response?.data),
);

module.exports = api;