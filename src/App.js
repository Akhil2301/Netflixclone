import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import {orginals, action,Romance} from './urls'
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>      
      <RowPost url={action} title='Actions' isSmall />
      <RowPost url={Romance} title='Romance' isSmall />
    </div>
  );
}

export default App;
