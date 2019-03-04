require("dotenv").config();
const calculator = require("./src/calculator");

console.log(calculator(process.env.VALUE));
