import axios from 'axios';

async function loginRequest(email, password) {
  const response = await axios.post('https://chatroomlegleye.herokuapp.com/login', {
    email, password,
  });
  return response.data;
}
export default loginRequest;
