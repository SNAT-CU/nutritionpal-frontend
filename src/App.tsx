import React from 'react';
import './App.css';
import NavbarOne from './Components/Nav/NavbarOne';
import NavbarTwo from './Components/Nav/NavbarTwo';
import DayChart from './Components/Diet/DayChart';
import Index from './Components/Auth/Index';
import { Provider } from 'react-redux';
import Store from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <NavbarOne />
        {/*<NavbarTwo />*/}
        {/*<Index />*/}
        <DayChart />
      </div>
    </Provider>
  );
}

export default App;
