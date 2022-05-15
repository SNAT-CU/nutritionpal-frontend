import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

import './Styles/Search.css';

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function CustomizedList({ foodName, foodDescription }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ display: 'flex', padding: '2px 0px' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'light',
            primary: { main: 'rgb(0,128,255)' },
            background: { paper: 'rgb(111,13,24)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ width: '100%' }}>
          <FireNav component="nav" disablePadding>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            />
            <div className="foodList">
              <div>{foodName}</div>
              <div>{foodDescription}</div>
            </div>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
