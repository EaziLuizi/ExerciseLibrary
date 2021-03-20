import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component {
  state = {
    exercises,
    exercise: {},
    group: '',
    editMode: false,
    dialogOpen: false,
  };

  getExercisesByMuscleGroup() {
    return Object.entries(
      this.state.exercises
        .sort((a, b) => (a.muscles > b.muscles ? 1 : -1))
        .reduce((exercises, exercise) => {
          const { muscles } = exercise;

          exercises[muscles] = exercises[muscles]
            ? [...exercises[muscles], exercise]
            : [exercise];

          return exercises;
        }, {})
    );
  }

  handleGroupSelected = (group) => {
    this.setState({ group });
  };

  handleExerciseSelected = (exerciseId) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === exerciseId),
    }));
  };

  handleExerciseCreate = (ex) => {
    const newExercise = {
      ...ex,
      id: ex.title.replace(/\s+/g, '-').toLowerCase(),
    };
    this.setState(({ exercises }) => ({
      exercises: [...exercises, newExercise],
      dialogOpen: false,
    }));
  };

  handleExerciseEditClick = (exerciseId) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find((ex) => ex.id === exerciseId),
      editMode: true,
    }));
  };

  handleExerciseEdit = (exercise) => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter((ex) => ex.id !== exercise.id), //exclude old exercise
        exercise, // add newly edited exercise
      ],
      exercise: exercise,
      editMode: false,
    }));
  };

  handleEditCancel = () => {
    if (this.state.editMode) this.setState({ editMode: false });
  };

  handleOpenCreateDialog = () => {
    this.setState({ dialogOpen: true });
  };

  handleCloseCreateDialog = () => {
    this.setState({ dialogOpen: false });
  };

  handleExerciseDelete = (exerciseId) => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter((ex) => ex.id != exerciseId),
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscleGroup();
    let { dialogOpen, group, exercise, editMode } = this.state;
    return (
      <MuiThemeProvider>
        <Header
          muscles={muscles}
          open={dialogOpen}
          openCreateDialog={this.handleOpenCreateDialog}
          closeCreateDialog={this.handleCloseCreateDialog}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          group={group}
          exercise={exercise}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
          onEditClick={this.handleExerciseEditClick}
          onEdit={this.handleExerciseEdit}
          onDelete={this.handleExerciseDelete}
          editMode={editMode}
          onCancel={this.handleEditCancel}
          muscles={muscles}
        />

        <Footer
          group={group}
          muscles={muscles}
          onSelect={this.handleGroupSelected}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
