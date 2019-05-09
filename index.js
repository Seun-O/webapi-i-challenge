// implement your API here
const express = require("express");
const server = express();
const db = require("./data/db.js");
const port = 8000;

server.get("/", (req, res) => {
  res.send("Hello World, from Node.js!!!!!");
});

server.post("/api/users", (req, res) => {
  res.status(201).json({ url: "/api/users", operation: "POST" });
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({
        error: err,
        msg: "he users information could not be retrieved."
      });
    });
});

server.get("/api/users/:id", (req, res) => {
  let id = req.params.id;
  db.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(404).json({
        error: err,
        msg: "The user with the specified ID does not exist."
      });
    });
});

server.delete("/api/users/:id", (req, res) => {
  let id = req.params.id;
  db.remove(id)
    .then(res.send(204))
    .catch(err => {
      res.status(404).json({
        error: err,
        msg: "The user with the specified ID does not exist."
      });
    });
});

server.put("/api/users/:id", (req, res) => {
  res.status(200).json({ url: "/hobbits", operation: "PUT" });
});

server.listen(port, () => {
  console.log(`Server Listening on Port:${port}`);
});
