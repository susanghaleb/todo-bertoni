import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = ({ task, onDelete, onCheck }) => {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    textDecoration: {
      textDecoration: "line-through"
    }
  }));
  const classes = useStyles();

  const { label, done } = task;
  const handleDelete = () => onDelete(task);
  const handleChange = () => onCheck({ ...task, done: !task.done });

  return (
    <Fragment>
      <ListItem alignItems="center">
        <Checkbox checked={done} onChange={handleChange} color="primary" />
        <ListItemText
          primary={label}
          className={done ? classes.textDecoration : ""}
        />
        <Button
          classkey="delete"
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={handleDelete}
        >
          Delete
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </ListItem>
      <Divider />
    </Fragment>
  );
};

Todo.propTypes = {
  task: PropTypes.shape({
    label: PropTypes.string,
    done: PropTypes.bool
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired
};

export default memo(Todo);
