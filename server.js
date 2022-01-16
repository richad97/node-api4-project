const express = require("express");
const server = express();

server.use(express.json());

const data = [
  {
    username: "ric",
    password: "1",
  },
  {
    username: "bric",
    password: "2",
  },
  {
    username: "bic",
    password: "3",
  },
];

server.get("/api/users", (req, res) => {
  res.json(data);
});

server.post("/api/register", (req, res) => {
  data.push(req.body);
  res.json(req.body);
});

server.post("/api/login", (req, res) => {
  let found = data.find((obj) => obj.username == req.body.username);
  res.json(found);
});

module.exports = server;
