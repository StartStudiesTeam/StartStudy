import axios from 'axios';
import { GetStorage } from '../utils/AsyncStorage';

const api = axios.create({
  baseURL: 'https://startstudies.com.br/api/v1',
});

api.interceptors.request.use(
  async (config) => {

    const accessToken = await GetStorage("accessToken");

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