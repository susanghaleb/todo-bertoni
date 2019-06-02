import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Todo from "../Todo/Todo";

const ListTodos = ({ tasks, onDelete, onCheck }) => {
  const useStyles = makeStyles(() => ({
    root: {
      width: "100%",
      justifyContent: "center"
    },
    inline: {
      display: "inline"
    }
  }));

  const classes = useStyles();
  return (
    <List className={classes.root}>
      {tasks.map(task => (
        <Todo
          task={task}
          onDelete={onDelete}
          onCheck={onCheck}
          key={JSON.stringify(task)}
        />
      ))}
    </List>
  );
};

ListTodos.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      id: PropTypes.number,
      done: PropTypes.bool
    })
  ),
  onDelete: PropTypes.func,
  onCheck: PropTypes.func
};

ListTodos.defaultProps = {
  tasks: [],
  onDelete: () => {},
  onCheck: () => {}
};

export default memo(ListTodos);
