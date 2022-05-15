import React, { useEffect, useState } from 'react';
import './App.css';
import NavbarOne from './Components/Nav/NavbarOne';
import DayChart from './Components/Diet/DayChart';

function App() {
  return (
    <div>
      <NavbarOne />
      {/* <Index /> */}
      <DayChart />
    </div>
  );
}

export default App;
