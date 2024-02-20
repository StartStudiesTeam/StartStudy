import axios from 'axios';
import { GetStorage } from '../utils/AsyncStorage';

const accessToken = GetStorage('accessToken');

const api = axios.create({
  baseURL: 'http://www.startstudies.com.br/api/v1',
});

api.interceptors.request.use(
  async (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

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