"use strict";

//import findSecret from "./findSecret";
//Hello, This a test for my scenario on CI/CD hacking lab
console.log("index");

var styled = function styled() {
  findSecret();
  return "Bonjour, cette version est la bonne 7.0.0";
};

console.log(styled());