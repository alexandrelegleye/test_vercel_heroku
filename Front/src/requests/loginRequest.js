import axios from 'axios';

import config from '../constant';

const url = config.url.API_URL;

async function loginRequest(email, password) {
  const response = await axios.post(`${url}/login`, {
    email, password,
  });
  return response.data;
}
export default loginRequest;
