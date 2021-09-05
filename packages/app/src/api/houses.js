import axios from 'axios';

export const fetchHouses = (city) => {
  return axios.get(`/${city}`)
};
