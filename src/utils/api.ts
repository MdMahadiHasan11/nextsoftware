import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use the base URL from the environment variable
  headers: {
    Accept: '*/*',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // Use the token from the environment variable
  },
});

export default api;
