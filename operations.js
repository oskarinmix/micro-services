const axios = require("axios");
const sum = async (event) => {
  const { a, b } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: a + b }),
  };
};
const rest = async (event) => {
  const { a, b } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: a - b }),
  };
};
const divide = async (event) => {
  const { a, b } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: a / b }),
  };
};
const multiply = async (event) => {
  const { a, b } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: a * b }),
  };
};
const squareRoot = async (event) => {
  const { a: num } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ result: Math.sqrt(num) }),
  };
};
const randomString = async (event) => {
  const { data } = await axios.get(process.env.RANDOM_ORG_URL);
  return {
    statusCode: 200,
    body: JSON.stringify({
      result: data.trim(),
    }),
  };
};
module.exports = { sum, rest, divide, multiply, randomString, squareRoot };
