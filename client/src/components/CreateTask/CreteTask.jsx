import React, { memo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    display: "flex",
    justifyContent: "space-between"
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    width: "50%",
    marginBottom: 20
  }
}));

const CreteTask = ({ submitTask }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const handleChange = ({ target }) => setText(target.value);
  const handleClick = () => {
    submitTask(text);
    setText("");
  };

  return (
    <Grid item className={classes.root} lg={12}>
      <Input
        name="createtodo"
        value={text}
        onChange={handleChange}
        placeholder="What needs to be done?"
        required
        className={classes.input}
      />
      <Button
        classkey="send"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClick}
        disabled={!text}
      >
        Add todo
      </Button>
    </Grid>
  );
};

CreteTask.propTypes = {
  submitTask: PropTypes.func.isRequired
};

export default memo(CreteTask);
