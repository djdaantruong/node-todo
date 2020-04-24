// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// https://expressjs.com/en/starter/basic-routing.html
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("index", {
    name: "CodersX"
  });
});

var todos = [
  { id: 1, name: "Đi chợ" },
  { id: 2, name: "Nấu cơm" },
  { id: 3, name: "Rửa bát" },
  { id: 4, name: "Học code trên CodersX" }
];

app.get("/todos", function(req, res) {
  res.render("todos/index", {
    todos: todos
  });
});

app.get("/todos/search", function(req, res) {
  var q = req.query.q;
  var matchedTodos = todos.filter(function(todo) {
    return todo.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render("todos/index", {
    todos: matchedTodos
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
