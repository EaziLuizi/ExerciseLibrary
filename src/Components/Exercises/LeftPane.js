import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const LeftPane = ({
  className,
  exercises,
  group,
  onSelect,
  onEditClick,
  onDelete,
}) => {
  return (
    <Paper className={className} style={{ height: 500, overflowY: 'auto' }}>
      {exercises.map(([grp, exercises], index) => {
        return !group || group === grp ? (
          <Fragment key={`lp_frag_${index}`}>
            <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
              {grp}
            </Typography>
            <List component="ul">
              {exercises
                .sort((a, b) => (a.title > b.title ? 1 : -1))
                .map((ex, idx) => {
                  return (
                    <ListItem
                      button
                      key={`lp_li_${idx}`}
                      onClick={() => onSelect(ex.id)}
                    >
                      <ListItemText primary={ex.title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          onClick={() => onEditClick(ex.id)}
                        >
                          <EditIcon />
                        </IconButton>

                        <IconButton
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          onClick={() => onDelete(ex.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
            </List>
          </Fragment>
        ) : null;
      })}
    </Paper>
  );
};

export default LeftPane;
