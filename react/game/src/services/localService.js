const LOCALSTORAGE_NAME = 'GAME_DATA';

const services = {
  set: data => {
    localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(data));
  },
  get: JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME)),
  delete: () => {
    localStorage.removeItem(LOCALSTORAGE_NAME);
  }
};

export default services;
