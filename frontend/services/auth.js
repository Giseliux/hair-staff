import axios from 'axios';
const isProduction= process.env.NODE_ENV === 'production'
const baseURL = isProduction ? 'http://localhost:3000/auth'
 : 'https://shrouded-retreat-49168.herokuapp.com/auth'

const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('/logout');
  }
};

export default AUTH_SERVICE;
