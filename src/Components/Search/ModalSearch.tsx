import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';
import Search from './Search';

export default function FormDialog({ searchModal, setSearchModal }) {
  const [open, setOpen] = React.useState(searchModal);

  const handleClickOpen = () => {
    setOpen(true);
    setSearchModal(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSearchModal(false);
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
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
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0}>
          <Dialog
            open={open}
            onClose={handleClose}
            sx={{
              width: '100vw',
            }}
          >
            <Paper
              component="form"
              sx={{
                p: '12px 12px 0px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Something, YOU BITCH !!!"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton
                type="submit"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={handleClose}
              >
                <HighlightOffIcon />
              </IconButton>
            </Paper>
            {/* <Divider /> */}
            <Paper>
              <DialogContent>
                <DialogContentText>
                  {/* Type Something to search ! */}
                </DialogContentText>
                <Search />
                <Search />
                <Search />
                <Search />
              </DialogContent>
            </Paper>
            {/* <Divider /> */}

            <Paper>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
              </DialogActions>
            </Paper>
          </Dialog>
        </Paper>
      </ThemeProvider>
    </>
  );
}
