const axios = require('axios');

class UserAPI {
  async getUsers(page) {
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    return response.data;
  }
}

module.exports = UserAPI;
