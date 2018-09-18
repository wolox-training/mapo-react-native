const services = {
  set: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  get: key => JSON.parse(localStorage.getItem(key)),
  delete: key => {
    localStorage.removeItem(key);
  }
};

export default services;
