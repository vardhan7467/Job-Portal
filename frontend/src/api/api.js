import axios from 'axios';

const API = axios.create({
  baseURL: 'https://job-portal-backend.onrender.com/api',
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;
