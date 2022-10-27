const prod = {
  url: {
    API_URL: 'https://chatroomlegleye.herokuapp.com',
  },
};

const dev = {
  url: {
    API_URL: 'http://localhost:5000',
  },
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
