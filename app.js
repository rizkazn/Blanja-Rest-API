require("dotenv/config")
const express = require('express')
const server = express();
const cors = require("cors")
// const morganMiddleware = require('./src/middleware/morganLogs')
const main = require('./src/main');

server.use(cors())
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/public", express.static("public"))
server.use(main);

module.exports = server