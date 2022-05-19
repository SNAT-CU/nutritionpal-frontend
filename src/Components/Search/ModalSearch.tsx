import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SearchIcon from '@mui/icons-material/Search';
import {IconButton, InputBase, Paper } from '@mui/material';
import Search from './Search';
import { useDispatch } from 'react-redux';

import './Styles/Search.css';
import { addFood } from '../../redux/foods';

export default function FormDialog({ searchModal, setSearchModal, section }: any) {
  const [open, setOpen] = useState(searchModal);

  const [foodData, setFoodData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://thetanmayvaish.xyz/food', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
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

  const handleClickFood = (food: any) => {
    dispatch(addFood({section, food}));
  }

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
                disableTouchRipple: true
              }
            }
          },
          palette: {
            mode: 'light',
            primary: { main: 'rgb(255,255,255)' },
            background: { paper: '#15803D' }
          }
        })}
      >
        <Paper elevation={0}>
          <Dialog
            open={open}
            onClose={handleClose}
            sx={{
              width: '100vw'
            }}
          >
            <Paper
              component='form'
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                position: 'sticky',
                top: 0,
                backgroundColor: '#15803D',
                zIndex: 100,
                padding: '5px',
                boxShadow: '0'
              }}
            >
              <IconButton sx={{ p: '10px' }} aria-label='menu'>
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, color: 'yellow' }}
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search google maps' }}
              />
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
                      key={`${food.food_name}+${ind}`}
                      foodName={food.food_name}
                      foodDescription={food.food_description}
                      handleClickFood={section ? ()=>handleClickFood(food) : null}
                    />
                  ))}
              </DialogContent>
            </Paper>
            {/* <Divider /> */}
          </Dialog>
        </Paper>
      </ThemeProvider>
    </>
  );
}
