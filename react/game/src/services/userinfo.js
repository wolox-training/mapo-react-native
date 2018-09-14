import { LOGIN_API_PATH } from '../constants/apiNames';
import API from '../config/API';

const services = {
  loginAPI: values => API.get(LOGIN_API_PATH, { email: values.mail, password: values.password })
};

export default services;
