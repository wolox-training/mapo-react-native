import { create } from 'apisauce';

import { BASE_URL } from '../../constants/apiNames';

const API = create({
  baseURL: BASE_URL
});

export default API;
