import { create } from 'apisauce';

const API = create({
  baseURL: process.env.REACT_APP_API_URL
});

export default API;
