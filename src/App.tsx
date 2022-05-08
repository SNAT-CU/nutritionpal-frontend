import React from 'react';
import './App.css';
import FoodSection from './Components/Diet/FoodSection';
import NavbarOne from './Components/Nav/NavbarOne';
import Index from './Components/Auth/Index';

function App() {
  return (
    <div>
      <NavbarOne />
      {/* <Index /> */}
      <FoodSection section="BREAKFAST" />
      <FoodSection section="LUNCH" />
      <FoodSection section="SNACKS" />
      <FoodSection section="DINNER" />
    </div>
  );
}

export default App;
