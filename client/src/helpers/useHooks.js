import { useState } from "react";
import * as rest from "../rest";

const useHooks = () => {
  const [todosArray, setTodos] = useState([]);

  const handleReadTasks = async () => {
    try {
      const {
        data: { todos }
      } = await rest.readTasks();
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateTaks = async task => {
    try {
      const {
        data: { todos }
      } = await rest.createTask(task);
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async task => {
    try {
      const {
        data: { todos }
      } = await rest.deleteTask(task);
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = async task => {
    try {
      const {
        data: { todos }
      } = await rest.updateTak(task);
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    todosArray,
    handleReadTasks,
    handleCreateTaks,
    handleDeleteTask,
    handleCheck
  };
};

export default useHooks;
