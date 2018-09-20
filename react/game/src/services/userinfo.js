import { USER_INFO_PATH } from '../constants/apiNames';
import API from '../config/API';

const services = {
  get: values => API.get(`${USER_INFO_PATH + values.id}?access_token=${values.token}`)
};

export default services;
