const { readFileSync, writeFile } = require("fs");

const routeFile = "mock/todos.json";

const rowData = readFileSync(routeFile);
const todosMock = JSON.parse(rowData);

const createCtrl = (req, res) => {
  const { body } = req;
  writeFile(routeFile, JSON.stringify([...todosMock, body], null, 2), error => {
    if (error)
      res.json({
        status: 500,
        message: "Error creating task",
        todos: JSON.parse(readFileSync(routeFile))
      });
    res.json({
      status: 200,
      message: `the task ${body.label} with id ${body.id} is created`,
      todos: JSON.parse(readFileSync(routeFile))
    });
  });
};

const reactCtrl = (req, res) => {
  res.json({
    status: 200,
    message: `All todos`,
    todos: JSON.parse(readFileSync(routeFile))
  });
};

const updateCtrl = (req, res) => {
  const { body } = req;

  writeFile(
    routeFile,

    JSON.stringify(
      todosMock.map(task => (task.id === body.id ? body : task)),
      null,
      2
    ),

    error => {
      if (error)
        res.json({
          status: 500,
          message: "Error updating task",
          todos: JSON.parse(readFileSync(routeFile))
        });
      res.json({
        status: 200,
        message: `the task ${body.label} with id ${body.id} is updated`,
        todos: JSON.parse(readFileSync(routeFile))
      });
    }
  );
};

const deleteCtrl = (req, res) => {
  const { body } = req;
  todosMock.filter(taks => taks.id !== body.id);
  writeFile(
    routeFile,
    JSON.stringify([...todosMock.filter(taks => taks.id !== body.id)], null, 2),
    error => {
      if (error)
        res.json({
          status: 500,
          message: "Error deleting task",
          todos: JSON.parse(readFileSync(routeFile))
        });
      res.json({
        status: 200,
        message: `the task ${body.label} with id ${body.id} is deleted`,
        todos: JSON.parse(readFileSync(routeFile))
      });
    }
  );
};

module.exports = {
  createCtrl,
  reactCtrl,
  updateCtrl,
  deleteCtrl
};
