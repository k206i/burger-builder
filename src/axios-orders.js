import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-d1ecd.firebaseio.com/',
});

export default instance;