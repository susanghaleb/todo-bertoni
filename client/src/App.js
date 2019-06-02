import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ListTodo from "./components/ListTodos/ListTodos";
import CreteTask from "./components/CreateTask/CreteTask";
import useHooks from "./helpers/useHooks";

const App = () => {
  const {
    todosArray,
    handleReadTasks,
    handleCreateTaks,
    handleDeleteTask,
    handleCheck
  } = useHooks();

  useEffect(() => {
    handleReadTasks();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justify="center" alignItems="center">
        <CreteTask submitTask={handleCreateTaks} />
        <ListTodo
          tasks={todosArray}
          onDelete={handleDeleteTask}
          onCheck={handleCheck}
        />
      </Grid>
    </Container>
  );
};

export default App;
