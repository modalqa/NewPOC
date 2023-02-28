const axios = require('axios');

class AuthAPI {
  async login(email, password) {
    const response = await axios.post('https://reqres.in/api/login', { email, password });
    return response.data;
  }
}

module.exports = AuthAPI;
