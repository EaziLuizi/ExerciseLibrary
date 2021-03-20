import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = ({ muscles, group, onSelect }) => {
  const idx = group ? muscles.findIndex((g) => g === group) : 0;
  console.log(idx);
  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index]);
  };

  return (
    <Paper>
      <Tabs
        value={idx}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={onIndexSelect}
        variant="fullWidth"
      >
        {muscles.map((group, index) => {
          return (
            <Tab
              key={`ft_tab_${index}`}
              style={{ backgroundColor: '#3f51b5' }}
              label={group}
            />
          );
        })}
      </Tabs>
    </Paper>
  );
};

export default Footer;
