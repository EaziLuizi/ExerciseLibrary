import React, { Fragment } from 'react';
import { Paper } from 'material-ui';
import Typography from '@material-ui/core/Typography';
import Form from './Form';

const RightPane = ({
  className,
  muscles,
  exercise,
  editMode,
  onEdit,
  onCancel,
}) => {
  return (
    <Paper className={className}>
      {editMode ? (
        <Fragment>
          <Form
            exerciseToEdit={exercise}
            selectedExercise={exercise}
            muscles={muscles}
            onSubmit={onEdit}
            onCancel={onCancel}
          ></Form>
        </Fragment>
      ) : (
        <Fragment>
          <Typography variant="h3">{exercise.title}</Typography>

          <Typography variant="caption">{exercise.description}</Typography>
        </Fragment>
      )}
    </Paper>
  );
};

export default RightPane;
