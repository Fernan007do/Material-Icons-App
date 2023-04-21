import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.

        </p>
          <Button size= "small" variant="text">Text</Button>
          <Button size= "medium" variant="contained">Contained</Button>
          <Button size= "large" variant="outlined">Outlined</Button>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </Stack>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
