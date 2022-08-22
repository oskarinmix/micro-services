"use strict";

module.exports.hello = async (event) => {
  return {
    status: 200,
    body: "Hello from Lambda",
  };
};
