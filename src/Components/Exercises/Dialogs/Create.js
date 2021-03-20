import React, { Fragment, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form';

const ExerciseDialog = ({ isOpen, muscles, onCreate, onOpen, onClose }) => {
  const [open, setOpen] = React.useState(isOpen || false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const newExercise = {
    title: '',
    description: '',
    muslces: '',
  };

  return (
    <Fragment>
      <IconButton
        onClick={onOpen}
        color="secondary"
        style={{ backgroundColor: '#fff' }}
        aria-label="add"
        size="small"
      >
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={onOpen} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the required fields below
          </DialogContentText>
          <Form
            selectedExercise={newExercise}
            muscles={muscles}
            onSubmit={onCreate}
            onCancel={onClose}
          ></Form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ExerciseDialog;
