const services = {
  loginAPI: values => API.post(LOGIN_API_PATH, { email: values.mail, password: values.password })
};

export default services;
