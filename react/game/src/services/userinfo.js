import { USER_INFO_PATH } from '../constants/apiNames';
import API from '../config/API';

const services = {
  get: (id, token) => API.get(`${USER_INFO_PATH + id}?access_token=${token}`)
};

export default services;
