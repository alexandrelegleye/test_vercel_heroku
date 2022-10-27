import axios from 'axios';

async function loginRequest(email, password) {
  const response = await axios.post('http://localhost:3001/login', {
    email, password,
  });
  return response.data;
}
export default loginRequest;
