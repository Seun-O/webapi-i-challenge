// implement your API here
const express = require("express");
const server = express();
const port = 8000;
const db = require("./data/db.js");
const cors = require("cors");

server.use(express.json());
server.use(cors());

const sendError = (res, status, msg) => {
  res.status(status).json({ error: msg });
  return;
};

const sendSuccess = (res, status = 200, data, msg) => {
  res.status(status).json({ data, message: msg });
  return;
};

server.get("/", (req, res) => {
  res.send("Hello World, from Node.js!!!!!");
});

server.post("/api/users", (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    sendError(res, 400, "Provide name and bio");
    return;
  }
  db.insert({ name, bio })
    .then(response => {
      sendSuccess(res, 201, response, "User successfully added!");
    })
    .catch(() => {
      sendError(
        res,
        500,
        "There was an error while saving the user to the database"
      );
      return;
    });
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(users => {
      // res.json(users);
      sendSuccess(res, 200, users, "Successfully retrieved list of users!");
    })
    .catch(() => {
      sendError(res, 500, "The users information could not be retrieved.");
    });
});

server.get("/api/users/:id", (req, res) => {
  let id = req.params.id;
  db.findById(id)
    .then(user => {
      if (user === undefined) {
        sendError(res, 404, `The user with ID: ${id} does not exist.`);
      }
      sendSuccess(res, 200, user, `Successfully retrieved user with ID: ${id}`);
    })
    .catch(() => {
      sendError(res, 500, "The user's information could not be retrieved.");
    });
});

server.delete("/api/users/:id", (req, res) => {
  let id = req.params.id;
  db.remove(id)
    .then(response => {
      if (response === 0) {
        sendError(res, 404, `The user with ID: ${id} does not exist`);
      }
      sendSuccess(
        res,
        204,
        response,
        `User with ID: ${id} successfully deleted.`
      );
      // res.json({ message: `User with ID: ${id} successfully deleted.` });
    })
    .catch(() => {
      sendError(res, 500, "The user could not be removed");
    });
});

server.put("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const { name, bio } = req.body;
  db.update(id, { name, bio })
    .then(response => {
      if (response === 0) {
        sendError(res, 404, `The user with ID: ${id} not found`);
      } else if ((response === 1 && name === undefined) || bio === undefined) {
        sendError(res, 400, "Please provide name and bio for the user");
      } else {
        res.json({ message: `Successfully updated user with ID: ${id}` });
      }
    })
    .catch(() => {
      sendError(res, 500, "The user information could not be modified.");
    });
});

server.listen(port, () => {
  console.log(`Server Listening on Port:${port}`);
});
