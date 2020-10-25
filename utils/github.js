
const axios = require('axios');

const api = {
  async getUser(response) {
    try { let response = await axios
        
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;