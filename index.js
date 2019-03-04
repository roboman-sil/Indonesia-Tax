require("dotenv").config();
const calculator = require("./src/calculator");

console.log(
  calculator(process.env.RATEOFINCOME, process.env.VALUE, process.env.STATUS)
);
