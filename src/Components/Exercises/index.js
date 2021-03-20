import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const useStyles = makeStyles((theme) => ({
  Paper: {
    padding: '20px',
    margin: '5px',
  },
}));

const Exercises = ({
  exercises,
  group,
  muscles,
  onSelect,
  editMode,
  onEditClick,
  onEdit,
  onCancel,
  onDelete,
  exercise,
}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={4}>
        <LeftPane
          className={classes.Paper}
          group={group}
          exercises={exercises}
          onSelect={onSelect}
          onEditClick={onEditClick}
          onDelete={onDelete}
        ></LeftPane>
      </Grid>
      <Grid item sm>
        <RightPane
          className={classes.Paper}
          exercise={exercise}
          muscles={muscles}
          editMode={editMode}
          onEdit={onEdit}
          onCancel={onCancel}
        ></RightPane>
      </Grid>
    </Grid>
  );
};

export default Exercises;
