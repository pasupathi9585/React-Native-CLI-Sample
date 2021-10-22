import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../config/env';

let headers = {};

const axiosInstance = axios.create({
  baseUrl: env.DEV_BACKEND_URL,
  headers,
});

console.log(env.DEV_BACKEND_URL);

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
