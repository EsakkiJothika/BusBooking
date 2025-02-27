let express = require("express");
const { signup } = require("../Controller/auth.controller");

let authrouter = express()

authrouter.post("/signup",signup)

module.exports = authrouter