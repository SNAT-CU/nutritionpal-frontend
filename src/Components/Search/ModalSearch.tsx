import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';
import Search from './Search';

export default function FormDialog({ searchModal, setSearchModal }) {
  const [open, setOpen] = useState(searchModal);

  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch('https://thetanmayvaish.xyz/food', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => setFoodData(result))
      .catch((error) => console.log('error', error));
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setSearchModal(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSearchModal(false);
  };

  console.log();

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
            mode: 'light',
            primary: { main: 'rgb(255,255,255)' },
            background: { paper: 'rgb(3,86,38)' },
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
                sx={{ ml: 1, flex: 1, color: 'white' }}
                placeholder="Search…"
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
                {foodData.foods &&
                  foodData.foods.food.map((food, ind) => (
                    <Search
                      key={ind}
                      foodName={food.food_name}
                      foodDescription={food.food_description}
                    />
                  ))}
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
