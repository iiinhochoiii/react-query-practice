import Axios from 'axios';

const baseURL = 'https://api.github.com';

const axiosInstance = Axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
