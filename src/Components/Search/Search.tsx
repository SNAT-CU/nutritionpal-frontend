import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const data = [
  { icon: '~', label: 'Authentication' },
  { icon: '~', label: 'Database' },
  { icon: '~', label: 'Storage' },
  { icon: '~', label: 'Hosting' },
];

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
            background: { paper: 'rgb(255,255,255)' },
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
            >
              <ListItemButton
                alignItems="flex-start"
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary={foodName}
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'bolder',
                    lineHeight: '20px',
                    mb: '2px',
                    color: '#DADD2',
                  }}
                  secondary={foodDescription}
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
              </ListItemButton>
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
