import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExerciseDialog from './../Exercises/Dialogs/Create';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({
  muscles,
  open,
  onExerciseCreate,
  openCreateDialog,
  closeCreateDialog,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" aria-label="menu"></IconButton>
          <Typography variant="h6" className={classes.title}>
            Exercise Library
          </Typography>

          <ExerciseDialog
            isOpen={open}
            muscles={muscles}
            onCreate={onExerciseCreate}
            onOpen={openCreateDialog}
            onClose={closeCreateDialog}
          ></ExerciseDialog>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
export default Header;
