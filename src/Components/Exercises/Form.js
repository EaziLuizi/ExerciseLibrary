import React, { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Select, MenuItem, InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
}));

const Form = ({ selectedExercise, muscles, onSubmit, onCancel }) => {
  const classes = useStyles();
  const [exercise, setExercise] = React.useState(selectedExercise);

  useEffect(() => {
    setExercise({ ...selectedExercise });
  }, [selectedExercise]);

  const handleInputChange = (name, event) => {
    if (event) {
      setExercise({
        ...exercise,
        [name]: event.target.value,
      });
    }
  };

  const handleSaveClick = () => {
    //todo: validation...
    onSubmit(exercise);
    setExercise({
      title: '',
      description: '',
      muslces: '',
    });
  };

  const handleCancelClick = () => {
    onCancel();
  };

  return (
    <form>
      <TextField
        autoFocus
        margin="dense"
        label="Title"
        type="text"
        value={exercise.title || ''}
        onChange={(e) => handleInputChange('title', e)}
        fullWidth
      />
      <TextField
        multiline
        rows={5}
        margin="dense"
        label="Description"
        type="description"
        value={exercise.description || ''}
        onChange={(e) => handleInputChange('description', e)}
        fullWidth
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="create-simple-select-label">Muscle Group</InputLabel>
        <Select
          labelId="create-simple-select-label"
          id="create-simple-select"
          value={exercise.muscles}
          onChange={(e) => handleInputChange('muscles', e)}
        >
          {muscles.map((g, index) => (
            <MenuItem key={`ce_menu_item_${index}`} value={g}>
              {g}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <Button onClick={handleSaveClick} color="primary">
        Save
      </Button>
      <Button onClick={handleCancelClick} color="primary">
        Cancel
      </Button>
    </form>
  );
};

export default Form;
