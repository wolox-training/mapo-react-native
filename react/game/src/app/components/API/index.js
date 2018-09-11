import { create } from 'apisauce';

import { BASE_URL, LOGIN_API_PATH } from '../../../constants/apiNames';

const API = create({
  baseURL: BASE_URL
});

const loginAPI = (values, callback) => {
  API.post(LOGIN_API_PATH, { email: values.mail, password: values.password }).then(response => {
    callback(response);
  });
};

export default loginAPI;
