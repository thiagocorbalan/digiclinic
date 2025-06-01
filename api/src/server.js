require("dotenv").config();
const { Person } = require("./person");

// require("./modules/path");
// require("./modules/http");
require("./modules/express");

const person = new Person('Thithi');
// console.log(person.sayMyName());